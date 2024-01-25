"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from bcrypt import gensalt
from flask_bcrypt import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/user', methods=['POST'])
def handle_user():
    #obtener data de la solicitud
    data = request.json
    email = data.get("email")
    password = data.get("password")
    nombre = data.get("nombre")
    telefono = data.get("telefono")
    direccion = data.get("direccion")
    apellido = data.get("apellido")
    terminos = data.get("terminos")


    # verificar que la data este completa
    data_check = [email, password, nombre, apellido, terminos]
    if None in data_check:
        return jsonify({
            "msg": "Faltan datos, por favor verifica tu solicitud"
        }), 400

    #verificar que el correo es unico
    usuario = User.query.filter_by(email=email).one_or_none()
    if usuario:
        return jsonify({
            "msg": "Ya existe un usuario asociado a este correo"
        }), 400
    
    #generar el salt y el hashed_password
    salt = str(gensalt(), encoding="utf-8")
    hashed_password = str(generate_password_hash(password + salt), encoding="utf-8")


    #crear el usuario y mandarlo a la base de datos
    nuevo_usuario = User(
        email = email,
        hashed_password = hashed_password,
        salt = salt,
        nombre = nombre,
        apellido = apellido,
        terminos = terminos,
        direccion = direccion,
        telefono = telefono
    )
    print(data)

    #guardar en la base de datos 
    try:
        db.session.add(nuevo_usuario)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "msg": "Ha ocurrido un error con la base de datos"
        }), 500
    
    return jsonify({}), 201

@api.route("/user")
@jwt_required()
def obtener_usuario():
    id = get_jwt_identity()
    usuario = User.query.get(id)
    return jsonify(usuario.serialize()), 200

@api.route("/token", methods=["POST"])
def handle_login():
    #obtener data de la solicitud
    data = request.json
    email = data.get("email")
    password = data.get("password")
    
    #verificar que la data esta completa
    data_check = [email, password]
    if None in data_check:
        return jsonify({
            "msg": "datos no completos"
        }), 400
    
    #verificar que es usuario ya existe
    usuario = User.query.filter_by(email=email).one_or_none()
    if usuario is None:
        return jsonify({
            "msg": "El correo no existe en la base de datos"
        }), 404
    
    #verificar el password
    password_es_correcta = check_password_hash(
        usuario.hashed_password,
        password + usuario.salt
    )
    if not password_es_correcta:
        return jsonify({
            "msg": "Contraseña incorrecta"
        }), 400
    
    #crear el token y retornarlo
    if password_es_correcta:
        token = create_access_token(identity=usuario.id)
        return jsonify(token), 201

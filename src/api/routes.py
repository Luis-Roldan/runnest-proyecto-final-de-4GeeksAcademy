"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from bcrypt import gensalt
from flask_bcrypt import check_password_hash, generate_password_hash

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

    # verificar que la data este completa
    data_check = [email, password, nombre]
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
        nombre = nombre
    )

    #guardar en la base de datos 
    try:
        db.session.add(nuevo_usuario)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "msg": "Ha ocurrido un error con la base de datos"
        }), 500
    
    return jsonify({
        "salt": salt,
        "password": hashed_password
    }), 201
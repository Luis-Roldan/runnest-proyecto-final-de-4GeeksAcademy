"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Carrera, CarreraUsuario, User, Organizador
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


@api.route("/organizador", methods=["POST"])
def handle_organizador():
    #obtener data de la solicitud
    data = request.json
    email = data.get("email")
    nombre = data.get("nombre")
    telefono = data.get("telefono")
    organizacion = data.get("organizacion")
    pagina = data.get("pagina")
    password = data.get("password")
    terminos = data.get("terminos")

    #verificar que los tados esten completos
    data_check = [email, nombre, organizacion, pagina, password, terminos]

    if None in data_check:
        return jsonify({
            "msg": "datos no completos"
        }), 400
    
    #verificar que el correo es unico
    usuario_cliente = User.query.filter_by(email=email).one_or_none()
    usuario_organizador = Organizador.query.filter_by(email=email).one_or_none()

    if usuario_cliente or usuario_organizador:
        return jsonify({
            "msg": "Ya existe un usuario asociado a este correo"
        }), 400

    #generar el salt y el hashed_password
    salt = str(gensalt(), encoding="utf-8")
    hashed_password = str(generate_password_hash(password + salt), encoding="utf-8")

    #crear el organizador
    nuevo_organizador = Organizador(
        email = email,
        hashed_password = hashed_password,
        salt = salt,
        nombre = nombre,
        telefono = telefono,
        organizacion = organizacion,
        pagina_web = pagina,
        terminos = terminos
    )

    #guardar el organizador en la base de datos 

    try:
        db.session.add(nuevo_organizador)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "msg": "Ha ocurrido un error con la base de datos"
        }), 500

    return jsonify({}), 201

@api.route("/token-org", methods=["POST"])
def handle_login_organizador():
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
    usuario_organizador = Organizador.query.filter_by(email=email).one_or_none()

    if usuario_organizador is None:
        return jsonify({
            "msg": "El correo no existe en la base de datos"
        }), 404
    
    #verificar la contraseña

    password_is_valid = check_password_hash(
        usuario_organizador.hashed_password,
        password + usuario_organizador.salt
    )

    if not password_is_valid:
        return jsonify({
            "msg": "Contraseña incorrecta"
        }), 400
    
    if password_is_valid:
        token = create_access_token(identity=usuario_organizador.id)
        return jsonify(token), 201
    
@api.route("/organizador")
@jwt_required()
def obtener_organizador():
    id = get_jwt_identity()
    organizador = Organizador.query.get(id)
    return jsonify(organizador.serialize()), 200 

# //////////////////////////////////////


@api.route('/carrera', methods=['POST', "GET"])
def crear_carrera():
    # Obtener datos de la solicitud
    data = request.json

    if request.method == "POST":
        # Extraer datos específicos para la carrera
        nombre = data.get("nombre")
        distancia = data.get("distancia")
        ciudad = data.get("ciudad")
        pais = data.get("pais")
        dia = data.get("dia")
        mes = data.get("mes")
        year = data.get("year")
        costo = data.get("costo")
        capacidad = data.get("capacidad")
        dificultad = data.get("dificultad")
        terminos = data.get("terminos")
        organizador_id = data.get("organizador_id")

        # Verificar que la data esté completa
        data_check = [nombre, distancia, ciudad, capacidad, pais, costo, dia, mes, year, dificultad, terminos, organizador_id]
        if None in data_check:
            return jsonify({
                "msg": "Faltan datos, por favor verifica tu solicitud"
            }), 400
        
        #verificar que el nombre de la carrera es unico
        carrera_existente = Carrera.query.filter_by(nombre=nombre).one_or_none()
        if carrera_existente:
            return jsonify({
                "msg": "Ya existe una carrera con este nombre, favor de seleccionar otro"
            }), 400
        

        # Crear una nueva Carrera
        nueva_carrera = Carrera(
            nombre = nombre,
            distancia = distancia,
            ciudad = ciudad,
            pais = pais,
            dia = dia,
            mes = mes,
            year = year,
            costo = costo,
            dificultad = dificultad,
            capacidad = capacidad,
            terminos = terminos,
            organizador_id = organizador_id
        )
        print(data)

        # Guardar la nueva carrera en la base de datos
        try:
            db.session.add(nueva_carrera)
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            return jsonify({
                "msg": "Ha ocurrido un error con la base de datos"
            }), 500

        return jsonify({}), 201
    
    if request.method == "GET":

        #Obtener todas las carreras
        carreras = Carrera.query.all()

        #lista para colocar las carreras serializadas
        carreras_serialized = []

        #loop para transformar cada carrera en json y agregalas a la lista carreras_serialized
        for carreras in carreras:
            carreras_serialized.append(carreras.serialize())
        
        return jsonify(carreras_serialized), 200



# --------------------------

# Ruta para la clase CarreraUsuario
@api.route('/carrera_usuario', methods=['POST'])
def inscribir_usuario_en_carrera():
    # Obtener datos de la solicitud
    data = request.json

    # Extraer datos específicos para la inscripción
    user_id = data.get("user_id")
    carrera_id = data.get("carrera_id")

    # Verificar que la data esté completa
    data_check = [user_id, carrera_id]
    if None in data_check:
        return jsonify({
            "msg": "Faltan datos, por favor verifica tu solicitud"
        }), 400

    #  verificar que el usuario y la carrera
    usuario_carrera = CarreraUsuario.query.filter_by(user_id=user_id, carrera_id=carrera_id).one_or_none()
    
    if usuario_carrera:
        return jsonify({
            "msg": "Esta usuario ya esta inscrito en esta carrera"
        }), 400
    
    # Crear una nueva instancia de la clase CarreraUsuario
    nueva_inscripcion = CarreraUsuario(
        user_id=user_id,
        carrera_id=carrera_id,
        
    )

    # Guardar la nueva inscripción en la base de datos
    try:
        db.session.add(nueva_inscripcion)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "msg": "Ha ocurrido un error con la base de datos"
        }), 500

    return jsonify({}), 201
from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()

class User(db.Model): #padre
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    hashed_password = db.Column(db.String(80), unique=False, nullable=False)
    salt = db.Column(db.String(250), unique=False, nullable=False)
    nombre = db.Column(db.String(200), unique=False, nullable=False)
    apellido = db.Column(db.String(200), unique=False, nullable=False)
    direccion = db.Column(db.String(500), unique=False, nullable=True)
    telefono = db.Column(db.BigInteger, unique=False, nullable=True)
    terminos = db.Column(db.Boolean(), unique=False, nullable=False)
    carrera_usuario = db.relationship("CarreraUsuario", back_populates="user")
    puntuacion= db.relationship("Puntuacion", back_populates="user")
    favoritos = db.relationship("Favoritos", back_populates="user")


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "direccion": self.direccion,
        }

class Organizador(db.Model): #padre
    id = db.Column(db.Integer, primary_key=True)
    hashed_password = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    salt = db.Column(db.String(250), unique=False, nullable=False)
    nombre = db.Column(db.String(200), unique=False, nullable=False)
    telefono = db.Column(db.BigInteger, unique=False, nullable=True)
    organizacion = db.Column(db.String(200), unique=False, nullable=False)
    pagina_web = db.Column(db.String(500), unique=False, nullable=False)
    terminos = db.Column(db.Boolean(), unique=False, nullable=False)
    carrera = db.relationship("Carrera", back_populates="organizador")  




    def __repr__(self):
        return f'<Organizador {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "organizacion": self.organizacion,
            "telefono": self.telefono,
            "pagina_web": self.pagina_web,
        }
    
class Carrera(db.Model): #padre e hijo
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), unique=False, nullable=False)
    distancia = db.Column(db.String(200), unique=False, nullable=False)
    ciudad = db.Column(db.String(100), unique=False, nullable=False)
    pais = db.Column(db.String(100), unique=False, nullable=False)
    dia = db.Column(db.Integer, unique=False, nullable=True)
    mes = db.Column(db.Integer, unique=False, nullable=True)
    year = db.Column(db.Integer, unique=False, nullable=True)
    costo = db.Column(db.Integer, unique=False, nullable=True)
    dificultad = db.Column(db.String(200), unique=False, nullable=False)
    capacidad = db.Column(db.Integer, unique=False, nullable=True)
    terminos = db.Column(db.Boolean(), unique=False, nullable=False)
    organizador_id = db.Column(db.Integer, db.ForeignKey('organizador.id'))  
    organizador = db.relationship("Organizador", back_populates="carrera")
    carrera_usuario= db.relationship("CarreraUsuario", back_populates="carrera")  
    puntuacion = db.relationship("Puntuacion", back_populates="carrera")
    favoritos = db.relationship("Favoritos", back_populates="carrera") 

    def __repr__(self):
        return f'<Carrera {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "distancia": self.distancia,
            "ciudad" : self.ciudad,
            "pais" : self.pais,
            "dia" : self.dia,
            "mes" : self.mes,
            "year" : self.year,
            "costo" :  self.costo,
            "capacidad" :  self.capacidad,
            "dificultad" : self.dificultad,
            "organizador" : self.organizador_id,
        }

class CarreraUsuario(db.Model): #hijo
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    carrera_id = db.Column(db.Integer, db.ForeignKey("carrera.id"))
    user = db.relationship("User", back_populates="carrera_usuario")
    carrera = db.relationship("Carrera", back_populates="carrera_usuario")


    def __repr__(self):
        return f'<{self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user_id,
            "carrera": self.carrera_id,
        }
    
class Puntuacion(db.Model):
    id =db.Column(db.Integer, primary_key=True)
    puntuacion= db.Column(db.Integer, unique=False, nullable= False)
    carrera_id = db.Column(db.Integer, db.ForeignKey("carrera.id"))
    carrera = db.relationship("Carrera", back_populates="puntuacion")
    user = db.relationship("User", back_populates="puntuacion")
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    
    
    def __repr__(self):
        return f'<Puntuacion {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user_id,
            "carrera_id": self.carrera_id,
            "puntuacion": self.puntuacion,
        }

class Favoritos(db.Model): # 
    id =db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    carrera_id = db.Column(db.Integer, db.ForeignKey("carrera.id"))
    user = db.relationship("User", back_populates="favoritos")
    carrera = db.relationship("Carrera", back_populates="favoritos")

    def __repr__(self):
        return f'<Favoritos {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user_id,
            "carrera_id": self.carrera_id,
        }
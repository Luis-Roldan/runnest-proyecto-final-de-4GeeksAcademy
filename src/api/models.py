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
    carrera_usuario= db.relationship("CarreraUsuario", back_populates="User")


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
    carrera= db.relationship("Carrera", back_populates="Organizador")  




    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "organizacion": self.organizacion,
            "telefono": self.telefono,
            "pagina_web": self.pagina_web,
        }
    
class Carrera(db.Model): #padre
    id = db.Column(db.Integer, primary_key=True)
    Nombre_carrera = db.Column(db.String(250), unique=False, nullable=False)
    distancia = db.Column(db.String(200), unique=False, nullable=False)
    lugar = db.Column(db.String(200), unique=False, nullable=False)
    fecha = db.Column(db.Integer, unique=False, nullable=True)
    capacidad = db.Column(db.Integer, unique=False, nullable=True)
    organizadores = db.Column(db.Integer, unique=False, nullable=False)
    costo = db.Column(db.Integer, unique=False, nullable=True)
    dificultad = db.Column(db.String(200), unique=False, nullable=False)
    terminos = db.Column(db.Boolean(), unique=False, nullable=False)
    organizador_id = db.Column(db.Integer, db.ForeignKey('organizador.id'))  
    carrera_usuario= db.relationship("CarreraUsuario", back_populates="Carrera")  
    organizador= db.relationship("Organizador", back_populates="Carrera")  

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "Nombre_carrera": self.Nombre_carrera,
            "lugar" : self.lugar,
            "fecha" : self.fecha,
            "capacidad" : self.capacidad,
            "organizadores" : self.organizadores,
            "costo" :  self.costo,
            "dificultad" : self.dificultad,
  
        }

class CarreraUsuario(db.Model): #hijo
    id = db.Column(db.Integer, primary_key=True)
    usuario_id= db.Column(db.Integer, db.ForeignKey("user.id"))
    carrera_id= db.Column(db.Integer, db.ForeignKey("carrera.id"))
    usuario= db.relationship("User", back_populates="CarreraUsuario")
    carrera= db.relationship("Carrera", back_populates="CarreraUsuario")

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "carrera_id": self.carrera_id,
        }
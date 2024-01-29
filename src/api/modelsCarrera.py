from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Carrera(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    hashed_password = db.Column(db.String(80), unique=False, nullable=False)
    Nombre_carrera = db.Column(db.String(250), unique=False, nullable=False)
    distancia = db.Column(db.String(200), unique=False, nullable=False)
    lugar = db.Column(db.String(200), unique=False, nullable=False)
    fecha = db.Column(db.Integer(500), unique=False, nullable=True)
    capacidad = db.Column(db.Integer, unique=False, nullable=True)
    organizadores = db.Column(db.Integer, unique=False, nullable=False)
    costo = db.Column(db.String(200), unique=False, nullable=True)
    dificultad = db.Column(db.String(200), unique=False, nullable=False)
    terminos = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User_organizador {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre_carrera": self.Nombre_carrera,
            "distancia" : self.distancia,
            "lugar" : self.lugar,
            "fecha ": self.fecha,
            "capacidad" :self.capacidad,
            "organizadores" : self.organizadores,
            "costo": self.costo,
            "dificultad" : self.dificultad,
        }

class Organizador(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hashed_password = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    salt = db.Column(db.String(250), unique=False, nullable=False)
    nombre = db.Column(db.String(200), unique=False, nullable=False)
    telefono = db.Column(db.BigInteger, unique=False, nullable=True)
    organizacion = db.Column(db.String(200), unique=False, nullable=False)
    pagina_web = db.Column(db.String(500), unique=False, nullable=False)
    terminos = db.Column(db.Boolean(), unique=False, nullable=False)


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
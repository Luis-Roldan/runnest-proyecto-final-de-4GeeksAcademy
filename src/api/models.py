from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    hashed_password = db.Column(db.String(80), unique=False, nullable=False)
    salt = db.Column(db.String(250), unique=False, nullable=False)
    nombre = db.Column(db.String(200), unique=False, nullable=False)
    apellido = db.Column(db.String(200), unique=False, nullable=False)
    direccion = db.Column(db.String(500), unique=False, nullable=True)
    telefono = db.Column(db.BigInteger, unique=False, nullable=True)
    terminos = db.Column(db.Boolean(), unique=False, nullable=False)


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
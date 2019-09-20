from flask import Flask
from flask_pymongo import PyMongo
from os import getenv

app = Flask(__name__)
app.config['MONGO_URI'] = getenv('MONGO_URI')
mongo = PyMongo(app)

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all domains to access the Flask backend

from . import routes  # Import routes here

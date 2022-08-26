from flask import Flask, request
import json
from authorize_face import face_rec

import os, sys

fpath = os.path.join(os.path.dirname(__file__), '..')
sys.path.append(fpath)

app = Flask(__name__)


@app.route('/face_rec', methods=['POST'])
def face_recognition():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' in request.files:
            file = request.files.get('file')                          
            name = face_rec(file)    
            resp_data = {'name': name }
            return json.dumps(resp_data)
app.run(host='0.0.0.0', port='5001', debug=True)
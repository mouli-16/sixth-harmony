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
        if 'file' in request.files:
            file = request.files.get('file')    
            try:                      
                name = face_rec(file)   
            except:
                return json.dumps({'invalid':True}) 
            resp_data = {'name': name }
            return json.dumps(resp_data)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port='8000', debug=True)

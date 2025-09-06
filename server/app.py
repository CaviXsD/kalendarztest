from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/save', methods=['POST'])
def save_data():
    data = request.json
    email = data.get('email')
    with open(f'data/{email}.json', 'w') as f:
        json.dump(data, f)
    return jsonify({"status": "saved"})

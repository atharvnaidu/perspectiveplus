from flask import request, jsonify
from app import app

@app.route('/check-subtitle', methods=['POST'])
def check_subtitle():
    data = request.get_json()  # Get the JSON data from the request
    subtitle = data.get('subtitle', '')  # Extract subtitle from the data (default to empty string if not present)
    
    # Calculate the length of the subtitle
    length = len(subtitle)
    
    # Return the length as a JSON response
    return jsonify({'length': length})

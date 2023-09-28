from flask import Flask, render_template, request, flash, redirect, jsonify

import requests

from config import API_KEY, secret_key


app = Flask(__name__)

# URL for the NFL Scores API endpoint
url = 'https://api.sportsdata.io/v4/nfl/scores/json/Games/2023REG'

# Set up headers with the API key
headers = {
    'Ocp-Apim-Subscription-Key': API_KEY
}




# -------------------------------------------------------------------------------------------
# Web site
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nfl_scores')
def nfl_scores():
   return render_template('nfl_scores.html')

@app.route('/team_stats')
def nfl_stats():
   return render_template('team_stats.html')

@app.route('/player_stats')
def nfl_player_stats():
   return render_template('player_stats.html')

@app.route('/team_standings')
def get_team_standings():
    # Make an API request to get team standings data
    standings_url = 'https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key={API_KEY}'
    response = requests.get(standings_url)

    if response.status_code == 200:
        team_standings = response.json()
        return jsonify(team_standings=team_standings)
    else:
        return jsonify(error='Failed to fetch team standings data')
     
@app.route('/team_standings_page')
def team_standings_page():
    standings_url = 'https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key={API_KEY}'
    response = requests.get(standings_url)

    if response.status_code == 200:
        team_standings = response.json()
        return render_template('standings.html', team_standings=team_standings)
    else:
        return render_template(error='Failed to fetch team standings data')



# -------------------------------------------------------------------------------------------
# Machine Learning
# @app.route('/model', methods=['POST'])
# def model():
#     try:
#         # Make a GET request to the API
#         response = requests.get(url, headers=headers)

#         # Check if the request was successful (status code 200)
#         if response.status_code == 200:
#             # Parse the JSON response
#             data = response.json()
            
#             print(data)

#             # Print the data (you can modify this part to process and use the data as needed)
#             return render_template('nfl_scores.html', data=data)
#         else:
#             flash(f'Error: {response.status_code} - {response.text}', 'error')
#             return redirect('/')
        
#     except requests.exceptions.RequestException as e:
#         flash(f'Error: {e}', 'error')
#         return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)




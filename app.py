# Import dependencies
from flask import Flask, render_template, request, jsonify

import sqlite3
import pandas as pd

from config import API_KEY


# -------------------------------------------------------------------------------------------

app = Flask(__name__, static_folder='static')

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

@app.route('/team_info')
def nfl_stats():
   return render_template('teams.html')


DATABASE = 'football.db'
print(DATABASE)




# @app.route('/player_stats', methods=['GET'])
# def render_player_stats():
#     return render_template('player_stats.html')

@app.route('/player_stats')
def player_stats():
    return render_template('player_stats.html')

    


@app.route('/team_standings_page')
def team_standings_page():
    return render_template('standings.html', api_key=API_KEY)

@app.route('/betting')
def betting_page():
   return render_template('betting.html')

@app.route('/process_form', methods=['POST'])
def process_form():
    team = request.form.get('team')
    year1 = int(request.form.get('year1'))
    year2 = int(request.form.get('year2'))

    # Connect to the SQLite database
    conn = sqlite3.connect('football_db.db')
    cursor = conn.cursor()

    ###### Table 1 - Record Information
    query_1 = 'SELECT Year, "Win-Loss Record", "Win %", "ATS Record", "Cover %", "Over Record", "Over %"  \
    FROM gambling_stats \
    WHERE Team = ? AND Year BETWEEN ? AND ?'
    
    cursor.execute(query_1, (team, year1, year2))
    filtered_data_1 = cursor.fetchall()
    columns_1 = ["Year", "Win-Loss Record", "Win %", "ATS Record", "Cover %", "Over Record", "Over %"]
   
    # Close the cursor and the connection
    cursor.close()
    conn.close()

    return render_template('betting.html', team=team, year1=year1, year2=year2, record_data=filtered_data_1, columns_1=columns_1)


if __name__ == '__main__':
    app.run(debug=True)




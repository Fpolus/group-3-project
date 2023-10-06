from flask import Flask, request, jsonify, render_template

import requests

import sqlite3

from config import API_KEY


app = Flask(__name__)

# URL for the NFL Scores API endpoint
url = 'https://api.sportsdata.io/v4/nfl/scores/json/Games/2023REG'

# Set up headers with the API key
headers = {
    'Ocp-Apim-Subscription-Key': API_KEY
}



DATABASE = 'football_db.db'

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


@app.route('/player_stats_data', methods=['GET'])
def get_players_data():
    position = request.args.get('position')
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    # Create a dictionary to map positions to table names
    position_to_table = {
        'Quarterback': 'qb_stats',
        'Running Back': 'rb_stats',
        'Wide Receiver': 'wr_stats',
        'Tight End': 'te_stats',
        'Defensive Line': 'dl_stats',
        'Line Back': 'lb_stats',
        'Defensive Back': 'db_stats',
        'Kicker': 'k_stats',
        'Punter': 'p_stats'
    }

    if position in position_to_table:
        table_name = position_to_table[position]

        # Query to retrieve column names for the specified table
        cursor.execute(f"PRAGMA table_info({table_name})")
        columns_info = cursor.fetchall()

        # Extract column names from the result
        column_order = [column_info[1] for column_info in columns_info]

        # Construct the SELECT query with the retrieved column names
        query = f"SELECT {', '.join(column_order)} FROM {table_name} ORDER BY name"

        cursor.execute(query)
        players = cursor.fetchall()

        # Create a list of dictionaries with column names as keys for all players
        player_data = []
        for player in players:
            player_dict = {}
            for i, column_name in enumerate(column_order):
                player_dict[column_name] = player[i]
            player_data.append(player_dict)

        connection.close()
        return jsonify(player_data)
    else:
        # If an invalid position is provided, return an empty list
        connection.close()
        return jsonify([])

if __name__ == '__main__':
    app.run(debug=True)
    
    

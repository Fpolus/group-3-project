import os
from flask import Flask, render_template, request, flash, redirect, jsonify
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base

import requests

from config import API_KEY


engine = create_engine("sqlite:///resources/football_db.db")


Base = automap_base()

Base.prepare(engine, reflect=True, schema=None)

print(Base.classes.keys())

stats = Base.classes.season_stats

session = Session(engine)

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

@app.route('/team_info')
def nfl_stats():
   return render_template('teams.html')

def get_player_stats_from_db(player_name=None):
    # Create a SQLAlchemy session
    session = Session(engine)

    if player_name:
        # If a player_name is provided, filter by Name
        player_stats = session.query(stats).filter(stats.Name.like(f'%{player_name}%')).all()
    else:
        # If no player_name is provided, fetch all player stats
        player_stats = session.query(stats).all()

    # Close the session
    session.close()

    return player_stats

@app.route('/player_stats', methods=['GET', 'POST'])
def nfl_player_stats():
    if request.method == 'POST':
        player_name = request.form['player_name']
        player_stats = get_player_stats_from_db(player_name)
    else:
        player_stats = get_player_stats_from_db()
        

    return render_template('player_stats.html', player_stats=player_stats)


@app.route('/team_standings_page')
def team_standings_page():
    return render_template('standings.html', api_key=API_KEY)



session.close()

if __name__ == '__main__':
    app.run(debug=True)




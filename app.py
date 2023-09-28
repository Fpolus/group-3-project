import os
from flask import Flask, render_template, request, flash, redirect, jsonify
from sqlalchemy.orm import session
from sqlalchemy import create_engine, func, or_
from sqlalchemy.ext.automap import automap_base



import requests

from config import API_KEY, secret_key

engine = create_engine("sqlite:///.db", echo=False)
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

@app.route('/team_standings_page')
def team_standings_page():
    return render_template('standings.html', api_key=API_KEY)

if __name__ == '__main__':
    app.run(debug=True)




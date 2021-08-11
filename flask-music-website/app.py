from flask import Flask, render_template
from Song import songs

app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
    return render_template('index.html', songs=songs)
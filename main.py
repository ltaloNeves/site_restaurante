from flask import Flask, render_template

app = Flask (__name__)

app.route('/homepage')
def homepage():
    return render_template("homepage.html")

@app.route('/reservas')
def reservas():
    return render_template("reservas.css")
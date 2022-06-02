from flask import render_template
from flask_app import app

@app.route('/')
def home_page():
    return render_template('home_page.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/drinks')
def drinks():
    return render_template('drinks.html')   

@app.route('/about_us')
def about_us():
    return render_template('about_us.html')

@app.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')

@app.route('/thank_you')
def thank_you():
    return render_template('thank_you.html')
 

@app.route('/reservations')
def reservations():
    return render_template('reservations.html')
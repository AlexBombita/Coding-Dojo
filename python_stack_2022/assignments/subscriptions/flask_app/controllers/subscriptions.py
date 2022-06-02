from flask import render_template,redirect,session,request, flash
from flask_app import app
from flask_app.models.subscription import Subscription
from flask_app.models.user import User


@app.route('/new/subscription')
def new_subscrtiption():
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":session['user_id']
    }
    return render_template('new_subscription.html',user=User.get_by_id(data))


@app.route('/create/subscription',methods=['POST'])
def create_subscrtiption():
    if 'user_id' not in session:
        return redirect('/logout')
    print(Subscription.validate_subscription(request.form))
    if not Subscription.validate_subscription(request.form):
        return redirect('/new/subscription')
    data = {
        "title": request.form["title"],
        "description": request.form["description"],
        "user_id": session["user_id"]
    }
    Subscription.save(data)
    return redirect('/dashboard')

       
    if not Subscription.validate_subscription(request.form):
        return redirect('/new/subscription')
    data = {
        "title": request.form["title"],
        "description": request.form["description"],
        "id": request.form['id']
    }
    Subscription.update(data)
    return redirect('/dashboard')

@app.route('/subscription/<int:id>')
def show_subscription(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    user_data = {
        "id":session['user_id']
    }
    return render_template("show_subscription.html",subscription=Subscription.get_one(data),user=User.get_by_id(user_data))

@app.route('/destroy/subscription/<int:id>')
def destroy_subscription(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    Subscription.destroy(data)
    return redirect('/dashboard')
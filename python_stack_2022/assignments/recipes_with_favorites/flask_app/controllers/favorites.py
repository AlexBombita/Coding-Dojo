from flask import render_template,redirect,session,request, flash
from flask_app import app
from flask_app.models.recipe import Recipe
from flask_app.models.user import User



@app.route('/destroy/favorite/<int:id>')
def destroy_favorite(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    Favorite.destroy(data)
    return redirect('/dashboard')
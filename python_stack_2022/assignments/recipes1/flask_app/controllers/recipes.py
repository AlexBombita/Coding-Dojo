from flask import render_template, request, redirect
from flask_app.models.recipe import Recipe
from flask_app import app


@app.route('/')
def index():
    return redirect('/recipes')


@app.route('/recipes')
def recipes():
    return render_template("recipes.html",recipes=Recipe.get_all())


@app.route('/recipes/new')
def new():
    return render_template("new_recipe.html")

@app.route('/recipes/create',methods=['POST'])
def create():
    print(request.form)
    Recipe.save(request.form)
    return redirect('/recipes')


@app.route('/recipes/edit/<int:id>')
def edit(id):
    data ={ 
        "id":id
    }
    return render_template("edit_recipe.html",recipe=Recipe.get_one(data))

@app.route('/recipes/show/<int:id>')
def show(id):
    data ={ 
        "id":id
    }
    return render_template("show_recipe.html",recipe=Recipe.get_one(data))


@app.route('/recipes/update',methods=['POST'])
def update():
    Recipe.update(request.form)
    return redirect('/recipes')

@app.route('/recipes/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    Recipe.destroy(data)
    return redirect('/recipes')
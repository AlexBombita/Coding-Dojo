from flask import Flask, render_template, request, redirect

from user import User

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/user')

@app.route('/user/new')
def addUser():
    return render_template("new_user.html")
    # return redirect('/user')

@app.route('/user')
def users():
    users_example = User.get_all()
    print(users)
    return render_template("users.html", user_html=users_example)

@app.route('/user/new', methods=['POST'])
def new_user():
    print(request.form)
    User.save(request.form)
    return redirect('/user')

if __name__ == "__main__":
    app.run(debug=True)
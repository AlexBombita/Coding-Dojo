from flask import Flask, render_template, redirect, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/result')
# def result():
#     return render_template("result.html")

@app.route('/user/result',methods=['POST'])
def result():
# print(request.form)
# User.save(request.form)
    return redirect('/result')

if __name__ == "__main__":
    app.run(debug=True)


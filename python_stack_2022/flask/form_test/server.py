from flask import Flask, render_template
app = Flask(__name__)
# our index route will handle rendering our form


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/users'), methods=['POST']
def users():
    return ""

if __name__ == "__main__":
    app.run(debug=True)


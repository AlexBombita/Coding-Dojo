from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def index():
    return render_template("index.html")  # Return the string 'Hello World!' as a response

@app.route('/4')          # The "@" decorator associates this route with the function immediately following
def index4():
    return render_template("index2.html") 

@app.route('/<int:x>/<int:y>')          # The "@" decorator associates this route with the function immediately following
def indexvariable(x, y):
    return render_template("index3.html", x=x, y=y) 


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    

    app.run(debug=True)    # Run the app in debug mode.


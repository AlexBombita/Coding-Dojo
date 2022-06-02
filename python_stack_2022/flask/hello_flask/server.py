from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)           # Create a new instance of the Flask class called "app"

@app.route('/')
def hell_world():
    return 'Hello World!' # The "@" decorator associates this route with the function immediately following

# def index():
    # return render_template("index.html") # Return the string 'Hello World!' as a response

# @app.route('/Success')
# def success():
#     return "Sucess"

# # import statements, maybe some other routes
    
# @app.route('/success')
# def success():
#   return "success"

# @app.route('/hello/<string:banana>?<int:num>')
# def hello(banana, num):
#     return render_template("hello.html",banana=banana, num=num)
    
if __name__=="__main__":

# app.run(debug=True) should be the very last statement! 

    app.run(debug=True)    # Run the app in debug mode.


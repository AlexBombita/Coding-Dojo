from flask import Flask, render_template, redirect, session # importing the Flask class from the flask module

app = Flask(__name__) #create an instance of the flask class and passing the required arg
app.secret_key = '1f2g4d6d25g46g2'
### Routes go here

# Count how many times a user visits the site.
# Display count on page.
# Reset the count when enter /destroy_session

@app.route('/')
def viewCount():
    if 'count' not in session:
        session['count']=0
    session['count']+=1
    return render_template("index.html", count= session['count'])

def plusTwo():
    session['count']+=1
    return redirect('/')

@app.route('/destroy_session')
def reset():
    session['count']=0
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
  """Landing page'"""
  return render_template('home.html',
    title='Demo site',
    description='This is a test description.'
  )

@app.route('/hello/<name>')
def hello(name):
  return render_template('home.html', name=name)

@app.route('/about')
def about():
  return render_template('about.html', 
    about_title='About me',
    about_h1='About header'
  )


if __name__ == "__main__":
  app.run(debug=True)
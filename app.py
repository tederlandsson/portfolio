from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
  return 'Hello world'

@app.route('/hello/<name>')
def hello(name):
  return render_template('home.html', name=name)

@app.route('/about')
def about():
  return 'About Flask'


if __name__ == "__main__":
  app.run(debug=True)
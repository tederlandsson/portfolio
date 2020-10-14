from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
  return 'Index page'

@app.route('/hello')
def hello():
  return render_template('src/home.html')

if __name__ == "__main__":
  app.run()
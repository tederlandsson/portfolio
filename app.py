from flask import Flask, render_template
import content
app = Flask(__name__)


@app.route('/')
def home():
  """Landing page'"""
  return render_template('home.html',
    content=content.homepage
  )

@app.route('/about')
def about():
  """About page"""
  return render_template('about.html', 
    content=content.about
  )

@app.route('/contact')
def contact():
  """Contact page"""
  return render_template('contact.html',  content=content.contact
  )

@app.route('/test')
def test():
  """Test page"""
  return render_template('test.html',  content=content.test
  )


if __name__ == "__main__":
  app.run(debug=True)
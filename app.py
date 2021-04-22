import flask
from flask import render_template

app = flask.Flask(__name__)

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/live_feed')
def liveFeed():
    return render_template('live_feed.html')

@app.route('/video_translate')
def videoTranslate():
    return render_template('video_translate.html')

# @app.route("/ASL", methods=['GET'])
# def get_user():
#     return {
#         "text": content,
#     }

if __name__ == "__main__":
    app.run(host='0.0.0.0')

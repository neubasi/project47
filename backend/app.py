from flask import Flask
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)


@app.route('/getData')
def getData():
    return {'data': datetime.now().strftime("%d.%m.%Y, %H:%M:%S:%f") + " Hello from Python Backend..."}


    # Running app
if __name__ == '__main__':
    app.run(port=5001, ssl_context=('cert.pem', 'key.pem'))

    # SERVER CERT PATH /etc/letsencrypt/live/hy1dra.com/fullchain.pem;
    # SERVER KEY  PATH /etc/letsencrypt/live/hy1dra.com/privkey.pem
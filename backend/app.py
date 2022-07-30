from flask import Flask

app = Flask(__name__, static_folder='dist', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(ssl_context=('/etc/letsencrypt/live/www.hy1dra.com/fullchain.pem', '/etc/letsencrypt/live/www.hy1dra.com/privkey.pem'), threaded=True, port=5000)
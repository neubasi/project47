# syntax=docker/dockerfile:1

FROM python:3.9-alpine

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "./app.py" , "--host=0.0.0.0"]

# CMD [ "flask", "run" , "-p",  "5001", "--cert=cert.pem", "--key=key.pem","--host=0.0.0.0"]
#CMD [ "flask", "run" , "-p",  "5001", "--host=0.0.0.0"]
## What is this?
This is a 

## Requires
- Python 3.9.13

## Setup
- python3 -m venv .env
- source .env/bin/activate
- pip install -r ./requirements.txt
- install python vscode extension
- set python vscode interpretter to be $(which python)
- pip install -e .

## Run locally
docker build -t tbg_lambda .
docker run -p 9000:8080 tbg_lambda

## Local CURL requests
```
curl -X POST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"requestContext":{"http":{"method":"GET","path": "/state"}}}'

curl -X POST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"requestContext":{"http":{"method":"POST","path": "/turn"}}}'
```

## Push Container to AWS
aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 095109913001.dkr.ecr.eu-west-2.amazonaws.com

docker tag tbg_lambda 095109913001.dkr.ecr.eu-west-2.amazonaws.com/lambda:tbg

docker push 095109913001.dkr.ecr.eu-west-2.amazonaws.com/lambda:tbg

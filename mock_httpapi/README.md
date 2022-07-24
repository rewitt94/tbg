## Setup
- python3 -m venv .env
- source .env/bin/activate
- pip install -r ./requirements.txt
- install python vscode exentension
- set python vscode interpretter to be $(which python)
- pip install -e .

## Run
source .env/bin/activate
python -m uvicorn app:app

## Run locally
docker build -t tbg_mock_httpapi .
docker-compose up (in parent directory)

docker run -p 9001:8000 tbg_mock_httpapi
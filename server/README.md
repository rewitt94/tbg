## Setup
- python3 -m venv ./env
- source .env/bin/activate
- pip install -r ./requirements.txt
- install python vscode exentension
- set python vscode interpretter to be $(which python)
- pip install -e .

## Run
source .env/bin/activate
python -m uvicorn turn_based_game.web.app:app
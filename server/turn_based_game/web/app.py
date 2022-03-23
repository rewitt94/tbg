from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from turn_based_game.core.GameRunner import GameRunner

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

game_runner = GameRunner()


@app.get("/game")
def get_game():
    return {"turnNumber": game_runner.turn_number, "season": game_runner.season}


@app.post("/game")
def next_turn():
    game_runner.next()

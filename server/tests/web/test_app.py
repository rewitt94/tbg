import re
from fastapi.testclient import TestClient

from turn_based_game.web.app import app

client = TestClient(app)


def test_404():
    response = client.get("/")
    assert response.status_code == 404


def test_get_game():
    response = client.get("/game")
    assert response.status_code == 200
    responseData = response.json()
    assert responseData['season'] > 0 and responseData['season'] <= 4
    assert responseData['turnNumber'] == 1


def test_next_turn():
    response = client.get("/game")
    assert response.status_code == 200
    responseData = response.json()
    season = responseData['season']
    turnNumber = responseData['turnNumber']
    response = client.post("/game")
    assert response.status_code == 200
    response = client.get("/game")
    assert response.status_code == 200
    responseData = response.json()
    assert responseData['season'] == season + 1 or 0
    assert responseData['turnNumber'] == turnNumber + 1
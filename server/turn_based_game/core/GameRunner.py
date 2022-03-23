import random


class GameRunner:

    turn_number: int = 1
    season: int = random.randrange(1, 4)

    def next(GameRunner):
        GameRunner.turn_number = GameRunner.turn_number + 1
        GameRunner.season = 1 if GameRunner.season >= 4 else GameRunner.season + 1
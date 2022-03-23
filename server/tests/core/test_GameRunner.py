from turn_based_game.core.GameRunner import GameRunner


def test_GameRunner():
    # this seems to apply as static class also ? - I find this confusing ?
    assert(GameRunner.turn_number == 1)
    assert(GameRunner.season > 0 and GameRunner.season <= 4)

    game_runner = GameRunner()
    assert(game_runner.turn_number == 1)
    assert(game_runner.season > 0 and game_runner.season <= 4)


def test_GameRunner_next():
    game_runner = GameRunner()
    game_runner.turn_number = 1
    game_runner.season = 2
    game_runner.next()
    assert(game_runner.turn_number == 2)
    assert(game_runner.season == 3)
    game_runner.next()
    assert(game_runner.turn_number == 3)
    assert(game_runner.season == 4)
    game_runner.next()
    assert(game_runner.turn_number == 4)
    assert(game_runner.season == 1)
    game_runner.next()
    assert(game_runner.turn_number == 5)
    assert(game_runner.season == 2)
    game_runner.next()
    assert(game_runner.turn_number == 6)
    assert(game_runner.season == 3)
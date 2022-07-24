import json
from .types import APIGWLambdaEvent
from aws_lambda_powertools.utilities.typing import LambdaContext


def next_turn_event(event: APIGWLambdaEvent, context: LambdaContext) -> str:
    print("next turn")
    print(event["body"])
    return "next turn processed"


def get_game_state(event: APIGWLambdaEvent, context: LambdaContext) -> str:
    print("get gamestate")
    return json.dumps({"turnNumber": 1, "season": 1})

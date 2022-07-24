from game.controller import next_turn_event, get_game_state
from game.types import APIGWLambdaEvent, Endpoint, Handler
from aws_lambda_powertools.utilities.typing import LambdaContext


ENDPOINTS: dict[Endpoint, Handler] = {
    Endpoint("/state", "GET"): get_game_state,
    Endpoint("/turn", "POST"): next_turn_event,
}


def handler(event: APIGWLambdaEvent, context: LambdaContext):
    try:
        print("Lambda has been invoked with event: ", event)
        requested_endpoint = Endpoint(
            event["requestContext"]["http"]["path"],
            event["requestContext"]["http"]["method"],
        )
        if (handler := ENDPOINTS.get(requested_endpoint)) is None:
            raise Exception("Could not find endpoint")
        return handler(event, context)
    except Exception as e:
        print("Unhandled lambda exception: ", e)
        raise e

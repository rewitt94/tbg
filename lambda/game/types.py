from typing import Callable, TypedDict
from dataclasses import dataclass
from aws_lambda_powertools.utilities.typing import LambdaContext


class HTTPRequestContext(TypedDict):
    method: str
    path: str


class RequestContext(TypedDict):
    time: str
    timeEpoch: str
    http: HTTPRequestContext


class APIGWLambdaEvent(TypedDict):
    body: str
    isBase64Encoded: bool
    headers: dict[str, str]
    requestContext: RequestContext


Handler = Callable[[APIGWLambdaEvent, LambdaContext], str]


@dataclass(frozen=True)
class Endpoint:
    path: str
    method: str

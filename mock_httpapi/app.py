from fastapi import FastAPI, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware
import requests
import time
import json
import base64

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


@app.get("/{full_path}")
async def proxy_get_to_lambda_continer(
    full_path: str, request: Request, response: Response
):
    lambdaResponse = requests.post(
        url="http://tbg_lambda:8080/2015-03-31/functions/function/invocations",
        data=json.dumps(
            {
                "requestContext": {
                    "timeEpoch": time.time(),
                    "http": {
                        "method": "GET",
                        "path": "/" + full_path,
                    },
                },
                "isBase64Encoded": True,
                "headers": request.headers.items(),
            }
        ),
    )
    responseBody = json.loads(lambdaResponse.content)
    if "errorMessage" in responseBody:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    else:
        response.status_code = lambdaResponse.status_code
    return responseBody


@app.post("/{full_path}")
async def proxy_post_to_lambda_continer(
    full_path: str, request: Request, response: Response
):
    requestBody = await request.body()
    encodedBytes = base64.b64encode(requestBody)
    encodedStr = str(encodedBytes, "utf-8")
    lambdaResponse = requests.post(
        url="http://tbg_lambda:8080/2015-03-31/functions/function/invocations",
        data=json.dumps(
            {
                "requestContext": {
                    "timeEpoch": time.time(),
                    "http": {
                        "method": "POST",
                        "path": "/" + full_path,
                    },
                },
                "body": encodedStr,
                "isBase64Encoded": True,
                "headers": request.headers.items(),
            }
        ),
    )
    responseBody = json.loads(lambdaResponse.content)
    if "errorMessage" in responseBody:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
    else:
        response.status_code = lambdaResponse.status_code
    return responseBody

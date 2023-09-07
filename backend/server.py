# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time

app = FastAPI()

origins = [
    "http://localhost:3000",  # Add your frontend's URL here
    "http://localhost:3001",  # Add more origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/post_query")
async def query_endpoint(request_data: dict):
    global stored_text
    stored_text = request_data.get("text", "")
    response = {"message": "success"}
    return response

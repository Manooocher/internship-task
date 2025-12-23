from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
@app.get("/")
async def read_root():
    return {"Hello": "World"}

class Message(BaseModel):
    text: str

@app.post("/chat")
async def chat(message: Message):
    return {"reply": f"your message was: {message.text}"}
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/v1/root")
async def root():
    return {"message": "Hello from Fast"}

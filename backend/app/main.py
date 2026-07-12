from fastapi import FastAPI

app = FastAPI(
    title="Athletix API",
    version="0.1.0"
)


@app.get("/")
def root():
    return {
        "message": "Bienvenue sur l'API Athletix !"
    }
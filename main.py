from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import uvicorn
from . import crud, models, schemas
from .database import engine
from .dependencies import get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Configuração CORS para permitir conexões do frontend React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],   
)

@app.post("/medicamentos/", response_model=schemas.Medicamento)
def create_medicamento(medicamento: schemas.MedicamentoCreate, db: Session = Depends(get_db)):
    return crud.create_medicamento(db=db, medicamento=medicamento)

@app.get("/medicamentos/{medicamento_id}", response_model=schemas.Medicamento)
def read_medicamento(medicamento_id: int, db: Session = Depends(get_db)):
    db_medicamento = crud.get_medicamento(db, medicamento_id=medicamento_id)
    if db_medicamento is None:
        raise HTTPException(status_code=404, detail="Medicamento not found")
    return db_medicamento

@app.get("/medicamentos/", response_model=list[schemas.Medicamento])
def read_medicamentos(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    medicamentos = crud.get_medicamentos(db, skip=skip, limit=limit)
    return medicamentos

@app.delete("/medicamentos/{medicamento_id}")
def delete_medicamento(medicamento_id: int, db: Session = Depends(get_db)):
    db_medicamento = crud.get_medicamento(db, medicamento_id=medicamento_id)
    if db_medicamento is None:
        raise HTTPException(status_code=404, detail="Medicamento not found")
    crud.delete_medicamento(db=db, medicamento_id=medicamento_id)
    return {"detail": "Medicamento deleted"}
    
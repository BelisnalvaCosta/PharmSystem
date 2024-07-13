from sqlalchemy.orm import Session
from . import models, schemas

def get_medicamento(db: Session, medicamento_id: int):
    return db.query(models.Medicamento).filter(models.Medicamento.id == medicamento_id).first()

def get_medicamentos(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Medicamento).offset(skip).limit(limit).all()

def create_medicamento(db: Session, medicamento: schemas.MedicamentoCreate):
    db_medicamento = models.Medicamento(**medicamento.dict())
    db.add(db_medicamento)
    db.commit()
    db.refresh(db_medicamento)
    return db_medicamento

def delete_medicamento(db: Session, medicamento_id: int):
    db_medicamento = get_medicamento(db, medicamento_id)
    if db_medicamento:
        db.delete(db_medicamento)
        db.commit()
    return db_medicamento
from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Medicamento(Base):
    __tablename__ = "medicamentos"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), index=True)
    descricao = Column(String(255))
    preco = Column(Float)
    quantidade = Column(Integer)

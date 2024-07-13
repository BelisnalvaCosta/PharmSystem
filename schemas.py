from pydantic import BaseModel

class MedicamentoBase(BaseModel):
    nome: str
    descricao: str
    preco: float
    quantidade: int

class MedicamentoCreate(MedicamentoBase):
    pass

class Medicamento(MedicamentoBase):
    id: int

    class Config:
        orm_mode = True

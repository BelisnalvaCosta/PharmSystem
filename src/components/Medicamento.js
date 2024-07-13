import React from 'react';

function Medicamento({ medicamento, setEditingMedicamento, deleteMedicamento }) {
  return (
    <div className="medicamento">
      <h2>{medicamento.nome}</h2>
      <p>{medicamento.descricao}</p>
      <p>Preço: {medicamento.preco}</p>
      <p>Quantidade: {medicamento.quantidade}</p>
      <button onClick={() => setEditingMedicamento(medicamento)}>Editar</button>
      <button onClick={() => deleteMedicamento(medicamento.id)}>Excluir</button>
    </div>
  );
}

export default Medicamento;

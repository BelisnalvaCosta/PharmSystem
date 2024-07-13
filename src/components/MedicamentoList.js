import React from 'react';
import Medicamento from './Medicamento';

function MedicamentoList({ medicamentos, setEditingMedicamento, deleteMedicamento }) {
  return (
    <div className="medicamento-list">
      {medicamentos.map(medicamento => (
        <Medicamento
          key={medicamento.id}
          medicamento={medicamento}
          setEditingMedicamento={setEditingMedicamento}
          deleteMedicamento={deleteMedicamento}
        />
      ))}
    </div>
  );
}

export default MedicamentoList;

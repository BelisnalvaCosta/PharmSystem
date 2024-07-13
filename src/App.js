import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MedicamentoForm from './components/MedicamentoForm';
import MedicamentoList from './components/MedicamentoList';
import './styles/App.css';

function App() {
  const [medicamentos, setMedicamentos] = useState([]);
  const [editingMedicamento, setEditingMedicamento] = useState(null);

  useEffect(() => {
    fetchMedicamentos();
  }, []);

  const fetchMedicamentos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/medicamentos/');
      setMedicamentos(response.data);
    } catch (error) {
      console.error('Erro ao buscar os medicamentos!', error);
    }
  };

  const addMedicamento = async (medicamento) => {
    try {
      const response = await axios.post('http://localhost:8000/medicamentos/', medicamento);
      setMedicamentos([...medicamentos, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar o medicamento!', error);
    }
  };

  const updateMedicamento = async (id, updatedMedicamento) => {
    try {
      await axios.put(`http://localhost:8000/medicamentos/${id}`, updatedMedicamento);
      setMedicamentos(medicamentos.map(med => (med.id === id ? updatedMedicamento : med)));
      setEditingMedicamento(null);
    } catch (error) {
      console.error('Erro ao atualizar o medicamento!', error);
    }
  };

  const deleteMedicamento = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/medicamentos/${id}`);
      setMedicamentos(medicamentos.filter(med => med.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o medicamento!', error);
    }
  };

  return (
    <div className="App">
      <h1>Gestão de Medicamentos</h1>
      <MedicamentoForm
        addMedicamento={addMedicamento}
        editingMedicamento={editingMedicamento}
        updateMedicamento={updateMedicamento}
      />
      <MedicamentoList
        medicamentos={medicamentos}
        setEditingMedicamento={setEditingMedicamento}
        deleteMedicamento={deleteMedicamento}
      />
    </div>
  );
}

export default App;
src/components/MedicamentoForm.js


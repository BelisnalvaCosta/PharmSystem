import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

export const getMedicamentos = async () => {
  const response = await api.get('medicamentos/');
  return response.data;
};

export const createMedicamento = async (medicamento) => {
  const response = await api.post('medicamentos/', medicamento);
  return response.data;
};

export const updateMedicamento = async (id, medicamento) => {
  const response = await api.put(`medicamentos/${id}`, medicamento);
  return response.data;
};

export const deleteMedicamento = async (id) => {
  const response = await api.delete(`medicamentos/${id}`);
  return response.data;
};

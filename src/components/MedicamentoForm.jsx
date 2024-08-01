import React, { useState, useEffect } from 'react';

function MedicamentoForm({ addMedicamento, editingMedicamento, updateMedicamento }) {
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade: ''
  });

  useEffect(() => {
    if (editingMedicamento) {
      setForm(editingMedicamento);
    } else {
      setForm({
        nome: '',
        descricao: '',
        preco: '',
        quantidade: ''
      });
    }
  }, [editingMedicamento]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMedicamento) {
      updateMedicamento(editingMedicamento.id, form);
    } else {
      addMedicamento(form);
    }
    setForm({
      nome: '',
      descricao: '',
      preco: '',
      quantidade: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="medicamento-form">
      <input
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        name="descricao"
        value={form.descricao}
        onChange={handleChange}
        placeholder="Descrição"
        required
      />
      <input
        type="number"
        name="preco"
        value={form.preco}
        onChange={handleChange}
        placeholder="Preço"
        required
      />
      <input
        type="number"
        name="quantidade"
        value={form.quantidade}
        onChange={handleChange}
        placeholder="Quantidade"
        required
      />
      <button type="submit">{editingMedicamento ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
}

export default MedicamentoForm;

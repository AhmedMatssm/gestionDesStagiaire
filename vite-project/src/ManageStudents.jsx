import React, { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    grade: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({ firstName: '', lastName: '', grade: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="Prénom"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Nom"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="grade"
        placeholder="Classe"
        value={formData.grade}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddStudentForm;

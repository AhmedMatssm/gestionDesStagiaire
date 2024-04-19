import React, { useState } from 'react';

function AddCourseForm({ onAddCourse }) {
  const [formData, setFormData] = useState({
    name: '',
    instructor: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse(formData);
    setFormData({ name: '', instructor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nom du cours"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="instructor"
        placeholder="Nom de l'instructeur"
        value={formData.instructor}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddCourseForm;

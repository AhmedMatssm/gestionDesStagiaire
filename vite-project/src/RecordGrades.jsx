import React, { useState } from 'react';

function RecordGradeForm({ students, onSubmitGrade }) {
  const [formData, setFormData] = useState({
    studentId: '',
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
    onSubmitGrade(formData);
    setFormData({ studentId: '', grade: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="studentId"
        value={formData.studentId}
        onChange={handleInputChange}
        required
      >
        <option value="">Sélectionner un étudiant</option>
        {students.map(student => (
          <option key={student.id} value={student.id}>
            {student.firstName} {student.lastName}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="grade"
        placeholder="Note"
        value={formData.grade}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default RecordGradeForm;

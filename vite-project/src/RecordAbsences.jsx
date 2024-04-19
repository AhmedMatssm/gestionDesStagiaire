import React, { useState } from 'react';

function RecordAbsenceForm({ students, onSubmitAbsence }) {
  const [formData, setFormData] = useState({
    studentId: '',
    isAbsent: false
  });

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitAbsence(formData);
    setFormData({ studentId: '', isAbsent: false });
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
      <label>
        <input
          type="checkbox"
          name="isAbsent"
          checked={formData.isAbsent}
          onChange={handleInputChange}
        />
        Absent
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default RecordAbsenceForm;

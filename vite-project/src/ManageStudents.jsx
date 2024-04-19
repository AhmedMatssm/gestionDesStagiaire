import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ManageStudents() {
  // State for managing the list of students
  const [students, setStudents] = useState([]);
  // State for managing the form data
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    grade: ''
  });
  // State for managing the mode (add or edit)
  const [mode, setMode] = useState('add');

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'add') {
      // Add a new student
      setStudents([...students, formData]);
    } else {
      // Edit an existing student
      const updatedStudents = students.map(student =>
        student.id === formData.id ? formData : student
      );
      setStudents(updatedStudents);
      setMode('add'); // Reset mode to 'add' after editing
    }
    // Reset form data
    setFormData({ id: '', firstName: '', lastName: '', grade: '' });
  };

  // Function to handle student deletion
  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };

  // Function to handle student editing
  const handleEdit = (student) => {
    setFormData(student);
    setMode('edit');
  };

  return (
    <>
    <nav className="w-full h-20 bg-slate-900 flex justify-center items-center ">
        <ul className="flex justify-center items-center gap-5  space-y-2">
          <li className='gap-5'>
            <Link
              to="/manage-students"
              className="text-white text-lg hover:underline"
            >
              Gérer les élèves
            </Link>
          </li >
          <li className='gap-5'>
            <Link
              to="/manage-courses"
              className="text-white text-lg hover:underline"
            >
              Gérer les cours
            </Link>
          </li>
          <li className='gap-5'>
            <Link
              to="/record-grades"
              className="text-white text-lg hover:underline"
            >
              Saisie des notes
            </Link>
          </li>
          <li className='gap-5'>
            <Link
              to="/record-absences"
              className="text-white text-lg hover:underline"
            >
              Gestion des absences
            </Link>
          </li>
          <li className='gap-5' >
            <Link
              to="/view-results"
              className="text-white text-lg hover:underline"
            >
              Consultation des résultats
            </Link>
          </li>
          <li className='gap-5'>
            <Link
              to="/generate-reports"
              className="text-white text-lg hover:underline"
            >
              Génération de rapports
            </Link>
          </li>
        </ul>
      </nav>
    <div className='w-full h-screen bg-gray-300 flex justify-center items-center'>
    <div className=" mx-auto flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Gérer les élèves</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col ">
        <input
          type="hidden"
          name="id"
          value={formData.id}
        />
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Classe"
          value={formData.grade}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {mode === 'add' ? 'Ajouter' : 'Modifier'}
        </button>
      </form>
      <ul>
        {students.map(student => (
          <li key={student.id} className="mb-2">
            <span>{student.firstName} {student.lastName} - {student.grade}</span>
            <button
              onClick={() => handleEdit(student)}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md ml-2 hover:bg-gray-400"
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(student.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-md ml-2 hover:bg-red-600"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default ManageStudents;

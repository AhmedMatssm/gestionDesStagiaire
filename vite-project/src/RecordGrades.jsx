import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function RecordGrades() {
  // State for managing the list of students and their grades
  const [students, setStudents] = useState([
    { id: 1, name: 'Élève 1', grade: '' },
    { id: 2, name: 'Élève 2', grade: '' },
    { id: 3, name: 'Élève 3', grade: '' }
    // Add more students as needed
  ]);

  // Function to handle grade input changes
  const handleGradeChange = (e, studentId) => {
    const updatedStudents = students.map(student =>
      student.id === studentId ? { ...student, grade: e.target.value } : student
    );
    setStudents(updatedStudents);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit grades to the backend or perform other actions
    console.log(students);
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
    <div className="w-full h-screen flex justify-center items-center flex-col bg-gray-300 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Saisie des notes</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <table className="w-96 border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Élève</th>
              <th className="px-4 py-2 text-left">Note</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border-t border-gray-200">
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={student.grade}
                    onChange={(e) => handleGradeChange(e, student.id)}
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="submit"
          className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Enregistrer
        </button>
      </form>
    </div>
    </>
  );
}

export default RecordGrades;

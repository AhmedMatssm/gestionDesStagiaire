import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function RecordAbsences() {
  // State for managing the list of students and their absences
  const [students, setStudents] = useState([
    { id: 1, name: 'Élève 1', isAbsent: false },
    { id: 2, name: 'Élève 2', isAbsent: false },
    { id: 3, name: 'Élève 3', isAbsent: false }
    // Add more students as needed
  ]);

  // Function to handle absence checkbox changes
  const handleAbsenceChange = (e, studentId) => {
    const updatedStudents = students.map(student =>
      student.id === studentId ? { ...student, isAbsent: e.target.checked } : student
    );
    setStudents(updatedStudents);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit absences to the backend or perform other actions
    console.log(students);
  };

  return (
    <>
        <nav className="w-full h-20 bg-slate-900 flex justify-center items-center">
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
      <div className='w-full h-screen  bg-gray-300 flex items-center justify-center flex-col'>
    <div className=" flex items-center flex-col  bg-gray-300 mx-auto ">
      <h1 className="text-2xl font-bold mb-4 text-center ">Gestion des absences</h1>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col mb-4">
        <table className="w-96  border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Élève</th>
              <th className="px-4 py-2 text-left">Absent</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border-t border-gray-200">
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={student.isAbsent}
                    onChange={(e) => handleAbsenceChange(e, student.id)}
                    className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="submit"
          className="mt-10 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Enregistrer
        </button>
      </form>
    </div>
    </div>
    </>
  );
}

export default RecordAbsences;

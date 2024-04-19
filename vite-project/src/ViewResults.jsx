import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ViewResults() {
  // State for managing the list of students, their grades, and absences
  const [students, setStudents] = useState([
    { id: 1, name: 'Élève 1', grade: 'A', isAbsent: false },
    { id: 2, name: 'Élève 2', grade: 'B', isAbsent: true },
    { id: 3, name: 'Élève 3', grade: 'C', isAbsent: false }
    // Add more students as needed
  ]);

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
    <div className="w-full h-screen  bg-gray-300 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Consultation des résultats</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Élève</th>
            <th className="px-4 py-2 text-left">Note</th>
            <th className="px-4 py-2 text-left">Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="border-t border-gray-200">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.grade}</td>
              <td className="px-4 py-2">{student.isAbsent ? 'Oui' : 'Non'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default ViewResults;



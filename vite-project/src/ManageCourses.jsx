import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ManageCourses() {
  // State for managing the list of courses
  const [courses, setCourses] = useState([]);
  // State for managing the form data
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    instructor: ''
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
      // Add a new course
      setCourses([...courses, formData]);
    } else {
      // Edit an existing course
      const updatedCourses = courses.map(course =>
        course.id === formData.id ? formData : course
      );
      setCourses(updatedCourses);
      setMode('add'); // Reset mode to 'add' after editing
    }
    // Reset form data
    setFormData({ id: '', name: '', instructor: '' });
  };

  // Function to handle course deletion
  const handleDelete = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
  };

  // Function to handle course editing
  const handleEdit = (course) => {
    setFormData(course);
    setMode('edit');
  };

  return (
    <>    <nav className="w-full h-20 bg-slate-900 flex justify-center items-center ">
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
    <div className="w-full h-screen  bg-gray-300 flex justify-center items-center flex-col mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gérer les cours</h1>
      <form onSubmit={handleSubmit} className=" flex justify-center items-center flex-col mb-4">
        <input
          type="hidden"
          name="id"
          value={formData.id}
        />
        <input
          type="text"
          name="name"
          placeholder="Nom du cours"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="instructor"
          placeholder="Nom de l'instructeur"
          value={formData.instructor}
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
        {courses.map(course => (
          <li key={course.id} className="mb-2">
            <span>{course.name} - {course.instructor}</span>
            <button
              onClick={() => handleEdit(course)}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md ml-2 hover:bg-gray-400"
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(course.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-md ml-2 hover:bg-red-600"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default ManageCourses;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ManageStudents from './ManageStudents';
// import ManageCourses from './ManageCourses';
// import RecordGrades from './RecordGrades';
// import RecordAbsences from './RecordAbsences';
// import ViewResults from './ViewResults';
// import GenerateReports from './GenerateReports';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<ViewResults />} />
//         <Route path="/manage-students" element={<ManageStudents />} />
//         <Route path="/manage-courses" element={<ManageCourses />} />
//         <Route path="/record-grades" element={<RecordGrades />} />
//         <Route path="/record-absences" element={<RecordAbsences />} />
//         {/* <Route path="/generate-reports" element={<GenerateReports />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState([]);

  const [formDataStagiaire, setFormDataStagiaire] = useState({
    firstName: '',
    lastName: '',
    classe: ''
  });

  const [formDataCours, setFormDataCours] = useState({
    name: '',
    instructor: ''
  });

  const [formDataNotes, setFormDataNotes] = useState({
    grade: ''
  });

  const [formDataAbsance, setFormDataAbsance] = useState({
    isAbsent: false
  });

  const [formDataDate, setFormDataDate] = useState({
    date: 'null'
  });
  const [recherche, setRecherche] = useState('');
  // const [isClick, setIsClick] = useState(false);

  // -----------------------------------------------
  const handleInputChangeStagiaire = (e) => {
    setFormDataStagiaire({
      ...formDataStagiaire,
      [e.target.name]: e.target.value
    });
  };


  const handleInputChangeCours = (e) => {
    setFormDataCours({
      ...formDataCours,
      [e.target.name]: e.target.value
    });
  };



  const handleInputChangeNotes = (e) => {
    setFormDataNotes({
      ...formDataNotes,
      [e.target.name]: e.target.value
    });
  };


  const handleInputChangeAbsance = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormDataAbsance({
      ...formDataAbsance,
      [e.target.name]: value
    });
  };
  const handleInputChangeDate = (e) => {
    setFormDataDate({
      ...formDataDate,
      [e.target.name]:e.target.value
    });
  };
  // --------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      stagiaire: formDataStagiaire,
      cours: formDataCours,
      notes: formDataNotes,
      absance: formDataAbsance,
      date: formDataDate
    };
    setFormData([...formData, newData]);
    setFormDataNotes({ grade: '' });
    setFormDataCours({ name: '', instructor: '' });
    setFormDataStagiaire({ firstName: '', lastName: '', classe: '' });
    setFormDataAbsance({ isAbsent: false });
    setFormDataAbsance({ date: '' });
  };

  const handleRecherche = (e) => {
    e.preventDefault();
    const filteredData = formData.filter(item =>
      item.stagiaire.firstName.toLowerCase().includes(recherche.toLowerCase()) ||
      item.stagiaire.lastName.toLowerCase().includes(recherche.toLowerCase())
    );
    setFormData(filteredData);
    setRecherche('')
  }



  return (
    <div className='w-full h-full'>
    <h1 className="text-2xl text-center font-semibold my-8">Saisir cette Information</h1>
 <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-8">
  {/* add stagiaire */}
  <div className="mb-4">
    <input
      type="text"
      name="firstName"
      placeholder="Prénom"
      value={formDataStagiaire.firstName}
      onChange={handleInputChangeStagiaire}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>
  <div className="mb-4">
    <input
      type="text"
      name="lastName"
      placeholder="Nom"
      value={formDataStagiaire.lastName}
      onChange={handleInputChangeStagiaire}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>
  <div className="mb-4">
    <input
      type="text"
      name="classe"
      placeholder="Classe"
      value={formDataStagiaire.classe}
      onChange={handleInputChangeStagiaire}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>
  {/* end add stagiaire */}

  {/* add cours */}
  <div className="mb-4">
    <input
      type="text"
      name="name"
      placeholder="Nom du cours"
      value={formDataCours.name}
      onChange={handleInputChangeCours}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>
  <div className="mb-4">
    <input
      type="text"
      name="instructor"
      placeholder="Nom de l'instructeur"
      value={formDataCours.instructor}
      onChange={handleInputChangeCours}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>
  {/* end add cours */}

  {/* add notes */}
  <div className="mb-4">
    <input
      type="text"
      name="grade"
      placeholder="Note"
      value={formDataNotes.grade}
      onChange={handleInputChangeNotes}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>
  {/* end add notes */}

  {/* add absance */}
  <div className="mb-4">
    <label className="flex items-center">
      <input
        type="checkbox"
        name="isAbsent"
        checked={formDataAbsance.isAbsent}
        onChange={handleInputChangeAbsance}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2">Absent</span>
    </label>
  </div>
  {formDataAbsance.isAbsent ? (
    <div className="mb-4">
    <input
      type="date"
      name="date"
      placeholder="Date"
      value={formDataDate.date}
      onChange={handleInputChangeDate}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>
    

  ) : <div></div>}
  {/* end add absance */}

  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Ajouter</button>
</form>

      <div className="mb-5 mt-5 flex justify-center">
          <input
            type="text"
            name="recherche"
            placeholder="Recherche par nom"
            value={recherche}
            onChange={e=> setRecherche(e.target.value)}
            className="w-96 px-3 mr-5 py-2 border border-gray-300 rounded-md"
            required
          />
          <button type="submit" onClick={handleRecherche} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Recherche</button>
        </div>

    <div className='container mx-auto'>
        {formData.length > 0 ? 
        <>
        <h2 className="text-2xl font-semibold my-8">Rapport</h2>
        <table className="w-full items-center bg-white shadow-md rounded-lg">
          <thead className='mb-5'>
            <tr className='mb-5'>
              <th>Stagiaire</th>
              <th>Classe</th>
              <th>Cours</th>
              <th>Instructeur</th>
              <th>Note</th>
              <th>Absent</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className='text-center mb-5'>
            {formData.map((item, index) => (
              <tr className='mb-10' key={index}>
                <td>{item.stagiaire.firstName} {item.stagiaire.lastName}</td>
                <td>{item.stagiaire.classe}</td>
                <td>{item.cours.name}</td>
                <td>{item.cours.instructor}</td>
                <td>{item.notes.grade}</td>
                <td>{item.absance.isAbsent ? 'Oui' : 'Non'}</td>
                <td>{item.date.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
        :<div className='text-2xl text-center font-semibold my-8'>No items</div>}
      </div>
      </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function GenerateReports() {
  // State for managing the selected report type
  const [selectedReport, setSelectedReport] = useState('');

  // Function to handle report type selection
  const handleReportSelect = (e) => {
    setSelectedReport(e.target.value);
  };

  // Function to handle report generation
  const handleGenerateReport = () => {
    // Logic to generate the selected report based on selectedReport
    console.log(`Generating report for ${selectedReport}`);
  };

  return (
    <>    
    <nav className="w-full h-20 bg-slate-900 flex justify-center items-center ">
    <ul className="flex justify-center items-center gap-5  space-y-2">
      <li className='gap-5'>
        <Link
          to="/"
          className="text-white text-lg hover:underline"
        >
          Accueil
        </Link>
      </li >
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
  <div className='w-full h-screen  bg-gray-300 flex justify-center items-center flex-col'>
    <div className=" flex justify-center items-center flex-col mx-auto">
      <h1 className="text-2xl font-bold mb-4">Génération de rapports</h1>
      <div className="flex flex-col mb-4">
        <select
          value={selectedReport}
          onChange={handleReportSelect}
          className="mr-2 mb-24 bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Sélectionner un type de rapport</option>
          <option value="bulletin">Bulletin de notes</option>
          <option value="absences">Rapport d'absences</option>
          {/* Add more report options as needed */}
        </select>
        <button
          onClick={handleGenerateReport}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Générer le rapport
        </button>
      </div>
    </div>
    </div>
    </>
  );
}

export default GenerateReports;


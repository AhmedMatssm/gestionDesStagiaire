import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bienvenue sur la page d'accueil !</h1>
      <nav className="mb-4">
        <ul className="flex flex-col space-y-2">
          <li>
            <Link
              to="/manage-students"
              className="text-blue-500 hover:underline"
            >
              Gérer les élèves
            </Link>
          </li>
          <li>
            <Link
              to="/manage-courses"
              className="text-blue-500 hover:underline"
            >
              Gérer les cours
            </Link>
          </li>
          <li>
            <Link
              to="/record-grades"
              className="text-blue-500 hover:underline"
            >
              Saisie des notes
            </Link>
          </li>
          <li>
            <Link
              to="/record-absences"
              className="text-blue-500 hover:underline"
            >
              Gestion des absences
            </Link>
          </li>
          <li>
            <Link
              to="/view-results"
              className="text-blue-500 hover:underline"
            >
              Consultation des résultats
            </Link>
          </li>
          <li>
            <Link
              to="/generate-reports"
              className="text-blue-500 hover:underline"
            >
              Génération de rapports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

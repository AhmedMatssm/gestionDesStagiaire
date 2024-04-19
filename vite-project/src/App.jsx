import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ManageStudents from './ManageStudents';
import ManageCourses from './ManageCourses';
import RecordGrades from './RecordGrades';
import RecordAbsences from './RecordAbsences';
import ViewResults from './ViewResults';
import GenerateReports from './GenerateReports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-students" element={<ManageStudents />} />
        <Route path="/manage-courses" element={<ManageCourses />} />
        <Route path="/record-grades" element={<RecordGrades />} />
        <Route path="/record-absences" element={<RecordAbsences />} />
        <Route path="/view-results" element={<ViewResults />} />
        <Route path="/generate-reports" element={<GenerateReports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



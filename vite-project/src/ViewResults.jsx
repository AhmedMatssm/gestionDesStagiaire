import React from 'react';

function Results({ students }) {
  return (
    <div>
      <h2>Résultats</h2>
      <table>
        <thead>
          <tr>
            <th>Élève</th>
            <th>Note</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.firstName} {student.lastName}</td>
              <td>{student.grade}</td>
              <td>{student.isAbsent ? 'Oui' : 'Non'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;

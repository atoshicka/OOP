import React from 'react';
import { people } from '../fakeData';

export function PeopleList() {
  return (
    <div className="people-list-container">
      <h2 className="people-list-title">Список людей</h2>
      <table className="people-table">
        <thead>
          <tr>
            <th className="table-header">ID</th>
            <th className="table-header">Имя</th>
            <th className="table-header">Возраст</th>
            <th className="table-header">Направление</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id} className="table-row">
              <td className="table-cell">{person.id}</td>
              <td className="table-cell">{person.name}</td>
              <td className="table-cell">{person.age}</td>
              <td className="table-cell">{person.direction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
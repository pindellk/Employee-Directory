import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Cell #</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      {props.results.map((employee) => (
        <tbody>
          <tr key={employee.cell}>
            <td>
              <img src={employee.picture.thumbnail}></img>
            </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.cell}</td>
            <td>{employee.dob.date}</td>
            <td>{employee.gender}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;

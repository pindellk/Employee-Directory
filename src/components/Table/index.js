import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Cell #</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
    </table>
  );
}

export default Table;

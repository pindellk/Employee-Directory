import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map((employee) => (
        <li key={employee.cell} className="list-group-item">
          {/* need unique key at global parent level - should be a string */}
          {employee.name.first}
          {employee.name.last}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;

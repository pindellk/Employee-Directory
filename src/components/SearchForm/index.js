import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function SearchForm(props) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.searchEmployees(search);
  }, [search]);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
        />
        <datalist id="employees">
          {props.list.map((employee) => (
            <option value={employee.name.first} key={employee} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={() => setSearch(search)}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Table from "../components/Table";

function Directory() {
  const [employees, setEmployees] = useState([]);
  console.log(employees);
  useEffect(
    () => API.getEmployees().then((data) => setEmployees(data.results)),
    [1]
  );

  const [search, setSearch] = useState("");
  useEffect(() => {
    // setSearch(employees.filter((employee) => employee.includes("")));
  }, [search]);

  return (
    <div>
      <Container style={{ margtinTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">Employee Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <SearchForm list={employees} onClick={() => setSearch(search)} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Table
              results={employees}
              sortOnClick={"insert sort function here"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Directory;

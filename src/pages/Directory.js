import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Table from "../components/Table";

function Directory() {
  const [employees, setEmployees] = useState([]);
  
  useEffect(
    () => API.getEmployees().then((data) => setEmployees(data.results)),
    [1]
  );

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
            <SearchForm list={employees} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Table
              results={employees}
              // sortOnClick={"insert sort function here"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Directory;

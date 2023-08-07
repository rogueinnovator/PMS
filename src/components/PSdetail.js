import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const PSdetail = () => {
  return (
    <div>
      <Accordion bg="dark" data-bs-theme="dark">
        <Accordion.Item eventKey="0">
          <Link to="/employeeitem">
            {" "}
            <Accordion.Header>ALI</Accordion.Header>
          </Link>

          <Accordion.Body>
            <ListGroup.Item>These are Employee details</ListGroup.Item>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion bg="dark" data-bs-theme="dark">
        <Accordion.Item eventKey="1">
          <Accordion.Header>FRAMAN</Accordion.Header>
          <Accordion.Body>
            <ListGroup.Item>These are Employee details</ListGroup.Item>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion bg="dark" data-bs-theme="dark">
        <Accordion.Item eventKey="2">
          <Accordion.Header>GUL</Accordion.Header>
          <Accordion.Body>
            <ListGroup.Item>These are Employee details</ListGroup.Item>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion bg="dark" data-bs-theme="dark">
        <Accordion.Item eventKey="3">
          <Accordion.Header>RAHEEL</Accordion.Header>
          <Accordion.Body>
            <ListGroup.Item>These are Employee details</ListGroup.Item>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion bg="dark" data-bs-theme="dark">
        <Accordion.Item eventKey="4">
          <Accordion.Header>SHAHZAD</Accordion.Header>
          <Accordion.Body>
            <ListGroup.Item>These are Employee details</ListGroup.Item>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PSdetail;

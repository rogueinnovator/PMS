import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../custome/custome.css";
const Navebar = () => {
  return (
    <Navbar className="navbar" expand="lg" >
      {/* <Card>
        {" "}
        <Card.Imgx`x`
          variant="top"
          src={
            process.env.PUBLIC_URL +
            "/images/Screenshot from 2023-08-03 22-28-18.png"
          }
        />
        <Card.ImgOverlay> */}
      <Container fluid="xxl">
        <Navbar.Brand className="custom">PMS</Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* The Navbar.Toggle component is a button that is used as a toggle to //
        show or hide the navigation links when the screen size is reduced. */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navbar" as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="navbar" as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* </Card.ImgOverlay> */}
      {/* </Card> */}
    </Navbar>
  );
};

export default Navebar;

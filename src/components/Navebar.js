import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../custome/custome.css";
import "../custome/text.css";
const Navebar = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container fluid="xxl">
        <Navbar.Brand className="text-effect">
            <span data-content="K">K</span>
            <span data-content="P">P</span>
            <span data-content="K">K</span>
            <span data-content="_">_</span>
            <span data-content="P">P</span>
            <span data-content="O">O</span>
            <span data-content="L">L</span>
            <span data-content="I">I</span>
            <span data-content="C">C</span>
            <span data-content="E">E</span>
        </Navbar.Brand>{" "}
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

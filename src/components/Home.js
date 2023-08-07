import React from "react";
import "../custome/custome.css";
import { Link } from "react-router-dom";
import { Card, Button, Placeholder } from "react-bootstrap";
const home = () => {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/images/background.jpeg"}
        />
        <Card.Body>
          <Card.Title>PESHAWAR</Card.Title>
          <Card.Text>THIS is located in the middle of PESHAWAR</Card.Text>
          <Link to="/psdetail">
            {" "}
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/images/background.jpeg"}
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
};
export default home;

import React from "react";
import { Card } from "react-bootstrap";
const EmployeItem = (props) => {
  const { employee } = props;
  console.log(employee.name);

  return (
    <div>
      <Card>{employee.name}</Card>
    </div>
  );
};

export default EmployeItem;

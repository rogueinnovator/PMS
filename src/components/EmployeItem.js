import React from "react";
import { Card } from "react-bootstrap";
const EmployeItem = (props) => {
  const { employee } = props;
  const employename = employee?.name || "NO NAME";
  const employecnic = employee?.cnic || "NO CNIC";
  const employeemail = employee?.email || "NO EMAIL";
  const employerank = employee?.rank || "NO RANK SPECIFIED ";
  return (
    <div>
      <Card>
        <p>Name: {employename}</p>
        <p>CNIC: {employecnic}</p>
        <p>Email: {employeemail}</p>
        <p>Rank: {employerank}</p>
        <>oshu</>
      </Card>
    </div>
  );
};

export default EmployeItem;

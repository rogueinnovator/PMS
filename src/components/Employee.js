import React, { useContext } from "react";
import EmployeContext from "../context/employee/employeContext";
import EmployeItem from "./EmployeItem";

const Employee = (props) => {
  const context = useContext(EmployeContext);
  const { employees } = context;

  return (
    <div>
      {employees.map((employee) => (
        <div className="employe" key={employee._id}>
          <EmployeItem employee={employee} />
        </div>
      ))}
    </div>
  );
};

export default Employee;
/* <h1>employee.name </h1>
      <h1>employee.rank </h1>
      <h1>employee.cnic </h1>
      <h1>employee.email </h1> */

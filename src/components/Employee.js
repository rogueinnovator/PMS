import React, { useContext } from "react";
import EmployeContext from "../context/employee/employeContext";
import EmployeItem from "./EmployeItem";
const Employee = (props) => {
  const context = useContext(EmployeContext);
  const { employees, setemployee } = context;
  // console.log(employees);

  return (
    <div>
      {employees.map((employee) => {
        return <EmployeItem key={employee.id} employee={employee} />;
      })}
    </div>
  );
};

export default Employee;

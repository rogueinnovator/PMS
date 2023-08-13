import React, { useState } from "react";
import employeContext from "./employeContext";
const Employeestate = (props) => {
  const Employeinitial = [
    {
      _id: "6493f51ea97f0e8ccfe70252",
      name: "huz2qaifa1",
      cnic: "14321-012129-112",
      email: "goreavb@email.com",
      rank: "DSP",
      PS: "649356bd8ea8a2ee196baec2",
      __v: 0,
    },
    {
      _id: "6493f52ba97f0e8ccfe70255",
      name: "huz2qaifa1",
      cnic: "14321-2012129-112",
      email: "g2ereavb@email.com",
      rank: "DSP",
      PS: "649356bd8ea8a2ee196baec2",
      __v: 0,
    },
    {
      _id: "6494810c15a26863550c3a21",
      name: "huz2qaifa1",
      cnic: "141-2012129-112",
      email: "g2eavb@email.com",
      rank: "DSP",
      PS: "649356bd8ea8a2ee196baec2",
      __v: 0,
    },
  ];
  const [employees, setemployee] = useState(Employeinitial);

  //add employee
  const addEmployee = (name, cnic, email, PS) => {
    const employee = {
      _id: "6494810c15a26863550c3a21",
      name: "huz2qaifa1",
      cnic: "141-2012129-112",
      email: "g2eavb@email.com",
      rank: "DSP",
      PS: "649356bd8ea8a2ee196baec2",
      __v: 0,
    };
    setemployee(employees.push(employee));
  };

  //delete employee
  const deleteEmployee = () => {};
  //retrive details on the basis of a PS
  const empPSdetails = () => {};
  //get employee details
  const employeeDetails = () => {};

  return (
    <employeContext.Provider
      value={{
        employees,
        addEmployee,
        deleteEmployee,
        employeeDetails,
        empPSdetails,
      }}
    >
      {props.children}
    </employeContext.Provider>
  );
};

export default Employeestate;

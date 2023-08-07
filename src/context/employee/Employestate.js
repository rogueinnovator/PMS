import React, { useState } from "react";
import employeContext from "./employeContext";
const Employeestate = (props) => {
  const Employeinitial = [
    {
      _id: "6493f52ba97f0e8ccfe70255",
      name: "huz2qaifa1",
      cnic: "14321-2012129-112",
      email: "g2ereavb@email.com",
      rank: "DSP",
      PS: {
        _id: "649356bd8ea8a2ee196baec2",
        name: "chamkani",
        add: "peshawar2",
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: "6493f52ba97f0e8ccfe70255",
      name: "huz2qaifa1",
      cnic: "14321-2012129-112",
      email: "g2ereavb@email.com",
      rank: "DSP",
      PS: {
        _id: "649356bd8ea8a2ee196baec2",
        name: "chamkani",
        add: "peshawar2",
        __v: 0,
      },
    },
  ];
  const [employees, setemployee] = useState(Employeinitial);
  return (
    <employeContext.Provider value={{ employees, setemployee }}>
      {props.children}
    </employeContext.Provider>
  );
};

export default Employeestate;

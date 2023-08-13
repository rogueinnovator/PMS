import "./App.css";
import Navbar from "./components/Navebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Employestate from "./context/employee/Employestate";
import PSdetail from "./components/PSdetail";
import Employee from "./components/Employee";
function App() {
  return (
    <>
      <Employestate>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/psdetails" element={<PSdetail />} />
            <Route path="/employee" element={<Employee />} />
          </Routes>
        </Router>
      </Employestate>
    </>
  );
}

export default App;

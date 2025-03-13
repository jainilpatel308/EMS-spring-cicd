// import React, { useState } from "react";
// import EmployeeList from "../components/EmployeeList";
// import EmployeeForm from "../components/EmployeeForm";
// import { Button, Container } from "@mui/material";

// const Employees = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <Container>
//       <Button onClick={() => setShowForm(!showForm)} sx={{ marginBottom: "20px" }} variant="contained" color="primary">
//         {showForm ? "Hide Form" : "Add Employee"}
//       </Button>
//       {showForm && <EmployeeForm onSave={() => setShowForm(false)} />}
//       <EmployeeList />
//     </Container>
//   );
// };

// export default Employees;
import React, { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import { Button, Container, Box } from "@mui/material";
import { getEmployees } from "../services/api";

const Employees = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleUpdate = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  return (
    <Container>
      {/* Properly aligned button */}
      <Box display="flex" justifyContent="flex-start" mt={3} mb={3}>
        <Button
          onClick={() => {
            setShowForm(true);
            setSelectedEmployee(null);
          }}
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }} // Adds padding for better look
        >
          {showForm ? "Hide Form" : "Add Employee"}
        </Button>
      </Box>

      {/* Show Employee Form */}
      {showForm && (
        <EmployeeForm 
          employee={selectedEmployee} 
          onSave={() => { setShowForm(false); setSelectedEmployee(null); }} 
          refreshList={fetchEmployees} 
        />
      )}

      {/* Show Employee List */}
      <EmployeeList employees={employees} fetchEmployees={fetchEmployees} onUpdate={handleUpdate} />
    </Container>
  );
};

export default Employees;

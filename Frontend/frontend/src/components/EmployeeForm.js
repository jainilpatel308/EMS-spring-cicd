// import React, { useState } from "react";
// import { createEmployee, updateEmployee } from "../services/api";
// import { TextField, Button, Container } from "@mui/material";

// const EmployeeForm = ({ employee, onSave }) => {
//   const [form, setForm] = useState(employee || { name: "", email: "", department: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (form.id) {
//       await updateEmployee(form.id, form);
//     } else {
//       await createEmployee(form);
//     }
//     onSave();
//   };

//   return (
//     <Container>
//       <h2>{form.id ? "Edit Employee" : "Add Employee"}</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField name="name" label="Name" value={form.name} onChange={handleChange} fullWidth margin="normal" required />
//         <TextField name="email" label="Email" value={form.email} onChange={handleChange} fullWidth margin="normal" required />
//         <TextField name="department" label="Department" value={form.department} onChange={handleChange} fullWidth margin="normal" required />
//         <Button type="submit" variant="contained" color="primary">
//           Save
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default EmployeeForm;
import React, { useState } from "react";
import { createEmployee, updateEmployee } from "../services/api";
import { TextField, Button, Container } from "@mui/material";

const EmployeeForm = ({ employee, onSave, refreshList }) => {
  const [form, setForm] = useState(employee || { name: "", email: "", department: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await updateEmployee(form.id, form); // Ensure PUT request is sent
    } else {
      await createEmployee(form);
    }
    refreshList(); // Re-fetch employees after save
    onSave(); // Close form
  };

  return (
    <Container>
      <h2>{form.id ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <TextField name="name" label="Name" value={form.name} onChange={handleChange} fullWidth margin="normal" required />
        <TextField name="email" label="Email" value={form.email} onChange={handleChange} fullWidth margin="normal" required />
        <TextField name="department" label="Department" value={form.department} onChange={handleChange} fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default EmployeeForm;

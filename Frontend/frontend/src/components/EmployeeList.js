// import React, { useEffect, useState }  from "react";
// import { getEmployees, deleteEmployee } from "../services/api";
// import {Table , TableHead, TableCell, TableRow, TableBody, Container, Button} from "@mui/material";

// const EmployeeList = () => {
//     const [employees, setEmployees] = useState([]);

//     useEffect(()=>{
//         fetchEmployees();
//     }, []);

//     const fetchEmployees = async () =>{
//         const response = await getEmployees();
//         setEmployees(response.data);
//     };

//     const handleDelete = async (id) => {
//         await deleteEmployee(id);
//         fetchEmployees();
//     };

//     return(
//         <Container>
//             <h2 Employee List></h2>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell> ID </TableCell>
//                         <TableCell>Name</TableCell>
//                         <TableCell>Email</TableCell>
//                         <TableCell>Department</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {employees.map((emp)=>(
//                         <TableRow key={emp.id}>
//                         <TableCell>{emp.id}</TableCell>
//                         <TableCell>{emp.name}</TableCell>
//                         <TableCell>{emp.email}</TableCell>
//                         <TableCell>{emp.department}</TableCell>
//                         <TableCell>
//                           <Button onClick={() => handleDelete(emp.id)} color="error">
//                             Delete
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </Container>
//     )
// };

// export default EmployeeList;
import React, { useEffect } from "react";
import { deleteEmployee } from "../services/api";
import { Table, TableHead, TableCell, TableRow, TableBody, Container, Button } from "@mui/material";

const EmployeeList = ({ employees, fetchEmployees, onUpdate }) => {
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await deleteEmployee(id);
      fetchEmployees(); // Ensure UI refreshes after deletion
    }
  };

  return (
    <Container>
      <h2>Employee List</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell><strong>Department</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell>{emp.id}</TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>
                <Button 
                  onClick={() => onUpdate(emp)} 
                  variant="outlined" 
                  color="primary"
                  sx={{ marginRight: "10px" }}
                >
                  Update
                </Button>
                <Button 
                  onClick={() => handleDelete(emp.id)} 
                  variant="outlined" 
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default EmployeeList;

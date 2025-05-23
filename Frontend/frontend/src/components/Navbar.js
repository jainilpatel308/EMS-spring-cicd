import React from "react";
import {AppBar, Toolbar, Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <AppBar position = "static">
            <Toolbar>
                <Typography variant = 'h6' sx = {{flexGrow: 1}}>
                    Employee Management 
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/employees">Employees</Button>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;
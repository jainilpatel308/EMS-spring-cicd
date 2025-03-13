// import React from "react";
// import { Container, Typography } from "@mui/material";

// const Home = () => {
//   return (
//     <Container>
//       <Typography variant="h4">Welcome to Employee Management System</Typography>
//     </Container>
//   );
// };

// export default Home;
import React from "react";
import { Container, Typography, Box, Button, Grid, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      {/* Project Title */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Employee Management System (EMS)
      </Typography>

      {/* Short Description */}
      <Typography variant="h5" color="text.secondary" paragraph>
        A Full-Stack Web Application built using Spring Boot, React, PostgreSQL, Docker, Jenkins, and Kubernetes.
      </Typography>

      {/* Tech Stack Cards - 3 Column Layout */}
      <Grid container spacing={4} justifyContent="center">
        {[
          {
            title: "Backend - Spring Boot 🚀",
            description: `REST APIs with Spring Boot. Data persistence with PostgreSQL. 
            JPA & Hibernate for ORM. Secure authentication (JWT future).`,
            link: "https://spring.io/projects/spring-boot",
            buttonText: "Spring Boot Docs",
          },
          {
            title: "Frontend - React 🎨",
            description: `React.js with Material UI. Axios for API requests. 
            React Router for navigation. Responsive & modern UI.`,
            link: "https://react.dev/",
            buttonText: "React Docs",
          },
          {
            title: "DevOps & CI/CD 🛠️",
            description: `CI/CD with Jenkins. Docker containerization. 
            Kubernetes orchestration. Automated testing pipeline.`,
            link: "https://kubernetes.io/docs/home/",
            buttonText: "Kubernetes Docs",
          },
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#F5F5F5", height: "100%" }}>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                href={item.link}
                target="_blank"
              >
                {item.buttonText}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* ✅ FIXED: CTA Buttons with Proper Alignment BELOW the Grid */}
      <Box sx={{ mt: 10, display: "flex", justifyContent: "center", gap: 6 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/employees"
          sx={{ px: 3, py: 1 }}
        >
          View Employees
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://github.com/jainilpatel308/EMS-spring-cicd"
          target="_blank"
          sx={{ px: 3, py: 1 }}
        >
          GitHub Repo
        </Button>
      </Box>
    </Container>
  );
};

export default Home;

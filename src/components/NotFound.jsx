// src/pages/NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: 2,
        }}
        variant="h1"
      >
        404
      </Typography>
      <Typography variant="h4">Oops! Page not found.</Typography>
      <Button sx={{ marginTop: 2 }} variant="contained" component={Link} to="/">
        Go To Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
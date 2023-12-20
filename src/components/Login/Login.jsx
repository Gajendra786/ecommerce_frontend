import React, { useState } from "react";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {
  Container,
  Box,
  Typography,
  Avatar,
  Grid,
  TextField,
  Button,
  Link,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const Login = () => {

const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"));
};

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: "70px",
        backgroundColor: "#f5f5f5",
        p: "100px!important",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ ml: 2, backgroundColor: "primary.main" }}>
          <LockOpenIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
      </Box>
      <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="off"
              autoFocus
              label="Email"
              id="email"
              name="email"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="off"
              autoFocus
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, p: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 5 }}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          e_commerce_project
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
};

export default Login;

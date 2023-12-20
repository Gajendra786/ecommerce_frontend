// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   TextField,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Link,
//   Avatar,
// } from "@mui/material";
// import CreateIcon from "@mui/icons-material/Create";

// const SignUp = () => {
//   const [termsAccepted, setTermsAccepted] = useState(false);

//   const handleTermsAcceptedChange = (event) => {
//     console.log(event.target.checked)
//     setTermsAccepted(event.target.checked);
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(name, value);
//   };
//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         mt: "80px",
//         backgroundColor: "#f5f5f5",
//         p: "50px!important",
//         borderRadius: "10px",
//       }}
//     >
//       <Box
//         sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
//       >
//         <Avatar sx={{ bgcolor: "primary.main" }}>
//           <CreateIcon />
//         </Avatar>
//         <Typography variant="h5">Sign Up</Typography>
//         <Box
//           component="form"
//           noValidate
//           sx={{ mt: 3 }}
//           onSubmit={submitHandler}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="firstName"
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//                 required
//                 onChange={handleChange}
//                 sx={{ backgroundColor: "#ffffff" }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="off"
//                 onChange={handleChange}
//                 sx={{ backgroundColor: "#ffffff" }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 onChange={handleChange}
//                 sx={{ backgroundColor: "#ffffff" }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="password"
//                 label="Password"
//                 name="password"
//                 type="password"
//                 autoComplete="off"
//                 onChange={handleChange}
//                 sx={{ backgroundColor: "#ffffff" }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormGroup>
//                 <FormControlLabel
//                   control={<Checkbox />}
//                   label="I accept the Terms and Conditions"
//                   onChange={handleTermsAcceptedChange}
//                 />
//               </FormGroup>
//             </Grid>
//           </Grid>
//           <Button
//             variant="contained"
//             fullWidth
//             type="submit"
//             disableElevation
//             sx={{ mt: 2, mb: 2 }}
//           >
//             Sign Up
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Typography
//         variant="body2"
//         color="text.secondary"
//         align="center"
//         sx={{ mt: 5 }}
//       >
//         {"Copyright ©"}
//         <Link color="inherit" href="#">
//           e-commerce-project
//         </Link>{" "}
//         {new Date().getFullYear()}
//         {"."}
//       </Typography>
//     </Container>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
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
  Alert,
} from "@mui/material";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [checkBox, setCheckBox] = useState(false);
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    if(Object.values(formData).filter(el=>el !== "").length <4){
      setError("All fields are required")
    }else if(!checkBox){
      setError("Please accept T&C")
    }else{
      const formData = new FormData(e.currentTarget);
      setLoading(true)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(error)setError("")
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckBox = (e) => {
    if(error && !checkBox) setError("")
    setCheckBox(e.target.checked);
  };

  return (
    <>
    {
      loading?<h1>Loading....</h1>:
      <Container
      maxWidth="sm"
      sx={{
        mt: "70px",
        backgroundColor: "#f5f5f5",
        p: "50px!important",
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
          <CreateIcon />
        </Avatar>
        <Typography variant="h5">Signup</Typography>
      </Box>
      <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="off"
              autoFocus
              label="First Name"
              id="firstName"
              name="firstName"
              required
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="off"
              label="Last Name"
              id="lastName"
              name="lastName"
              required
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="off"
              label="Email"
              id="email"
              name="email"
              required
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="off"
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              fullWidth
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <FormGroup sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="I accept Terms and Condition"
            onChange={handleCheckBox}
            checked={checkBox}
          />
        </FormGroup>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disableElevation
          sx={{ mt: 3, mb: 2, p: 2 }}
        >
          Sign Up
        </Button>
        {error?<Alert severity="warning">{error}</Alert>:null}
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
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
    }
    </>
    
  );
};

export default SignUp;

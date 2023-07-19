import React, { useCallback, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Snackbar,
} from "@material-ui/core";
import ComponentCard from "./ComponentCard";
import { useNavigate } from "react-router-dom";
import { Alert, Stack } from "@mui/material";
import Swal from "sweetalert2";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!email) {
      formIsValid = false;
      newErrors.email = "Email is required";
    }

    if (!password) {
      formIsValid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Perform login logic here
      const loginDetails = {
        userId: email,
        password,
      };
      onLogin(loginDetails);
      console.log("Login successful");
    }
  };

  const onLogin = useCallback(async (details) => {
    try {
      const response = await fetch(
        
        "http://13.234.104.94/login",
        //"https://nfc-backend-compass-5b3f.vercel.app",
        //"https://accessservices.site/login",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.status === 403 || response.status === 401) {
        console.log("hiii");
        Swal.fire({
          icon: "error",
          title: "Authentication Error",
          text: "User not found",
        });
        //   <Snackbar  autoHideDuration={6000} >
        //   <Alert variant="outlined" severity="error">
        //     This is an error alert — check it out!
        //   </Alert>
        //  </Snackbar>
      }
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
       // const token = data.jsonContent;
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem('userId',data.userId);
        sessionStorage.setItem('userType', data.userType);
        sessionStorage.setItem('userCity', data.city);
        navigate("/starter");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ComponentCard>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                //type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </ComponentCard>
  );
};

export default Login;

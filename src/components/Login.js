import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: 'url("/path/to/background-image.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  formContainer: {
    padding: theme.spacing(4),
    maxWidth: 400,
    width: "100%",
  },
  formTitle: {
    marginBottom: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <div className={classes.root}>
      <Container>
        <Paper elevation={3} className={classes.formContainer}>
          <Typography variant="h5" component="h2" className={classes.formTitle}>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              className={classes.formField}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              className={classes.formField}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.formButton}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;

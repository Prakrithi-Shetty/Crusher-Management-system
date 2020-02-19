import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { match } from "assert";
import { validate } from "@babel/types";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  border: {
    paddingTop: 70,
    paddingLeft: 60,
    paddingRight: 80,
    paddingBottom: 70
  },
  button: {
    float: "Right",
    marginTop: 20
  },
  font: {
    fontFamily: "Roboto medium",
    fontSize: 25,
    float: "left",
    marginBottom: 10
  },
  space: {
    marginTop: 50
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: " 'Roboto', sans-serif",
    "& label": {
      fontWeight: "bold",
      fontSize: 18,
      fontFamily: " 'Roboto', sans-serif"
    }
  },
  textTransform: {
    textTransform: "capitalize"
  }
}));

function Register(props) {
  const classes = useStyles();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");

  let onsubmit = e => {
    e.preventDefault();
    console.log(email, password, confirmPassword);

    let data = {
      email: email,
      password1: password,
      password2: confirmPassword
    };

    // axios.post("http://friday-deploy.herokuapp.com/emailcheck/",{email})
    // .then(resp=>{
    //   console.log(resp.data)
    // })

    Axios.post(
      "http://crusherproject.herokuapp.com/rest-auth/registration/",
      data
    ).then(resp => {
      console.log(resp.data);
      alert("Registered Succesfully, Confirmation Mail Sent Your Mail");
      props.history.push("/");
    });
  };

  return (
    <div>
      <div className={classes.space}>
        <div className={classes.border}>
          <Typography className={classes.font}>Sign Up</Typography>
          <TextField
            id="input-one"
            value={email}
            defaultValue={email}
            floatingLabelBold="Email"
            className={classes.textField}
            label="Email"
            fullWidth
            onChange={e => setEmail(e.target.value)}
          ></TextField>
          <TextField
            id="input-two"
            value={password}
            defaultValue={password}
            floatingLabelBold="Password"
            className={classes.textField}
            label="Password"
            type="password"
            fullWidth
            onChange={e => setPassword(e.target.value)}
          ></TextField>
          <TextField
            id="input-three"
            value={confirmPassword}
            type="password"
            defaultValue={confirmPassword}
            floatingLabelBold="Confirm Password"
            className={classes.textField}
            label="Confirm Password"
            fullWidth
            onChange={e => setConfirmPassword(e.target.value)}
          ></TextField>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onsubmit}
          >
            <span className={classes.textTransform}>Register</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
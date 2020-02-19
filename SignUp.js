import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { match } from "assert";
import { validate } from "@babel/types";
import Appbar from "./Appbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  border: {
    paddingTop: 70,
    paddingLeft: 250,
    paddingRight: 250,
    paddingBottom: 200
  },
  pass:{
    float: "right",
    fontSize:13,
  },
  button: {
    float: "right",
    marginTop: 20,
    marginRight:0,
    marginLeft:10,

  },
  font: {
    fontFamily: "Roboto medium",
    fontSize: 30,
    textAlign:"start",
    
  },
  link:{
   float:"right"
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
        fontSize: 14,
        fontFamily: " 'Roboto', sans-serif"
      }
  },
  textTransform: {
    textTransform: "capitalize",
    float:"center"
  }
}));

 function Signup() {
   const classes = useStyles();
   const [userName, setuserName] = useState(" ");
   const [email, setemail] = useState(" ");
   const [password, setpassword] = useState(" ");
   const [confirmPassword, setconfirmPassword] = useState(" ");
//   const [alert, setAlert] = useState([]);

  
  //};

  return (
    <div>
     

      <div className={classes.space}>
       
       
        <div className={classes.border}>
        <Typography className={classes.font}>SignUp</Typography>
        <br></br>
        {/* <TextField
            id="input-with-icon-textfield"
             hintText="Enter your  user name"
             floatingLabelText=" Userame"
             label="Username"
             type="text"
             //onChange = {(event,newValue) => this.setState({name:newValue})}
             fullWidth
             
             className={classes.textField}
             /> */}
              <TextField
            id="input-with-icon-textfield"
             hintText="Enter your  Email"
             floatingLabelText=" Email"
             label="Email"
             type="Email"
             //onChange = {(event,newValue) => this.setState({name:newValue})}
             fullWidth
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="Enter your  passowrd"
             floatingLabelText=" password"
             label="password"
             type="password"
             //onChange = {(event,newValue) => this.setState({name:newValue})}
             fullWidth
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="Confirm password"
             floatingLabelText=" Confirm password"
             label="Confirm password"
             type="password"
             //onChange = {(event,newValue) => this.setState({name:newValue})}
             fullWidth
             
             className={classes.textField}
             />
        
          
        
      <br></br>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            >
          
            <div className={classes.textTransform}>Register</div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
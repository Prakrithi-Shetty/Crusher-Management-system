import React, { useState,useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { match } from "assert";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import InputAdornment from "@material-ui/core/InputAdornment";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { withRouter, Link } from "react-router-dom";

import axios from 'axios'
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    
  border: {
    paddingTop: 70,
    paddingLeft: 60,
    paddingRight: 80,
    paddingBottom: 70
  },
  button: {
    float: "right",
    marginLeft: 105,
    marginTop: 80
  },
  font: {
    fontFamily: "Roboto medium",
    fontSize: 25,
    float: "left"
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
    },
    " & focus": {
      cursor: "none"
    }
  },
  textTransform: {
    textTransform: "capitalize"
  },
  icon: {
    cursor: "pointer"
  },
  forget: {
    float: "right",
    color: "darkblue",
    marginTop: 20
  }
}));

function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("  ");
  const [password, setPassword] = useState(" ");
  useEffect(()=>{
    
    if(localStorage.length){
       props.history.push("/dashboard");
    }
   })
  let LoginHandler=(e)=>{
    
    e.preventDefault();
    axios.post("http://crusherproject.herokuapp.com/rest-auth/login/",{
 email,
 password
})
.then(
  resp=> {
      console.log(resp.data)
  }
//  console.log(resp)

,(error=>{
  
    console.log(error.data)
})
 )

}




  return (
    <div>
      <div className={classes.space}>
        <div className={classes.border}>
          <Typography className={classes.font}>Login </Typography>
          <form >
          <TextField
            id="standard-basic"
            value={email}
            floatingLabelText="Email"
            label="Enter Your Email"
            name="Email"
            fullWidth
            required
            onChange={e => setEmail(e.target.value)}
            margin="normal"
            className={classes.textField}
          ></TextField>

          <TextField
            id="standard-basic"
            value={password}
            defaultValue={password}
            name="Password"
            label="Password"
            required
            floatingLabelText="Password"
            className={classes.textField}
            fullWidth
            onChange={e => setPassword(e.target.value)}
          ></TextField>

<Grid container >
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <Link to="./register">
              
              <Typography >Sign UP</Typography>
            </Link>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <Link to="./forgot">
            <Typography >Forget Password</Typography>
          </Link>
          </Grid>
          </Grid>


         
         
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={LoginHandler}
          >
            <span className={classes.textTransform}>Login</span>
          </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter( Login);
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Otp from "../OTP/otp"

import Icon from '@material-ui/core/Icon';

import {
  TextField, Button,
    Typography,
  Card,
  Grid
} from "@material-ui/core";


function Forgotpassword(props) {
let [show,setShow]=useState(false)
 let SubmitHandler = () => {
    // document.getElementById("1").style.display = "block";
    setShow(true)
  };
    return (
    
      <div style={{ padding: "16px" }}>
      <Card style={{ width: "50%", textAlign: "left", padding: "16px" }}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Typography>Enter your name/phone: </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-password-input"
              label="email/phone"
              type="email/phone"
              autoComplete="current-password"
              variant="outlined"
              text-decoration="none"
              
            />
          </Grid>

          <Grid item xs={4}>
            <Button onClick={SubmitHandler} style={{ margin: "16px" }}>
              Submit
            </Button>
          </Grid>
        </Grid>
        </Card>
        <Card style={{ width: "50%", textAlign: "left", padding: "16px" }}>
       
        {show?
        <Otp />:("")}
          {/* <OTP /> */}
      
      </Card>
    </div>
    )
}

Forgotpassword.propTypes = {

}

export default Forgotpassword
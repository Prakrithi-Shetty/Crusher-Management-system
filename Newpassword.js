import React,{useState} from 'react'
import PropTypes from 'prop-types'

import Icon from '@material-ui/core/Icon';

import {
  TextField, Button,
    Typography,
  Card,
  Grid
} from "@material-ui/core";

function NewPassword(props) {
    return (
        <div style={{ marginTop: "26px" }}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Typography style={{ textAlign: "center" }}>
              New Password:
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-password-input"
              label="New Password"
              type="New Password"
              autoComplete="current-password"
              variant="outlined"
              text-decoration="none"
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: "16px" }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Typography style={{ textAlign: "center" }}>
                Confirm Password:
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-password-input"
                label="Confirm Password"
                type="Confirm Password"
                autoComplete="current-password"
                variant="outlined"
                text-decoration="none"
              />
            </Grid>
            <Grid>
              <Button style={{ margin: "16px" }}>Save</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    )
}

NewPassword.propTypes = {

}

export default NewPassword
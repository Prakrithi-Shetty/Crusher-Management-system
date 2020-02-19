import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { match } from "assert";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import InputAdornment from "@material-ui/core/InputAdornment";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Appbar from "./Appbar";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  border: {
    paddingTop: 70,
    paddingLeft: 250,
    paddingRight: 250,
    paddingBottom: 200
  },
  button: {
    float: "Right",
    marginTop: 20
  },
  font: {
    fontFamily: "Roboto medium",
    fontSize: 35
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

function Driverregister(props) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("  ");
  const [lastName, setLastName] = useState(" ");
  const [mobile, setMobile] = useState(" ");
  const [driverPicture, setDriverPicture] = useState(" ");
  const [driverLicense, setDriverLicense] = useState(" ");
  const [driverIdentity, setDriverIdentity] = useState(" ");
  const [imageName, setImageName] = useState("  Upload Driver Picture ");
  const [fileName, setFileName] = useState(" Upload Driver's Driving License ");
  const [identityName, setIdentityName] = useState(
    " Upload Driver's Identification Proof"
  );

  const nameImage = e => {
    setDriverPicture(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };
  const nameImages = e => {
    setDriverLicense(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const nameImagess = e => {
    setDriverIdentity(e.target.files[0]);
    setIdentityName(e.target.files[0].name);
  };

  let onSubmit = e => {
    let data = new FormData();
    data.append("first_name", firstName);
    data.append("last_name", lastName);
    data.append("phone_number", mobile);
    //     data.append("profile_pic",driverPicture);
    // data.append("driver_licence_doc",driverLicense);
    // data.append("driver_id_doc",driverIdentity);
    console.log(data);

    //   console.log(data)
    axios
      .post("https://crusherproject.herokuapp.com/api/driver/add/", data)

      .then(resp => {
        console.log(resp.data);
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Appbar />

      <Link to="./dashboard">
        <h5 left>Dashboard</h5>
      </Link>
      <form>
        <div className={classes.space}>
          <Typography className={classes.font}>REGISTER NEW DRIVER</Typography>
          <div className={classes.border}>
            <TextField
              id="input-with-icon-textfield"
              value={firstName}
              floatingLabel="Driver First Name"
              label="Driver First Name"
              name="Driver First Name"
              fullWidth
              onChange={e => setFirstName(e.target.value)}
              margin="normal"
              className={classes.textField}
            ></TextField>
            <TextField
              id="input-with-icon-textfield"
              value={lastName}
              defaultValue={lastName}
              name="Driver Last Name"
              className={classes.textField}
              label="Driver Last Name"
              fullWidth
              onChange={e => setLastName(e.target.value)}
            ></TextField>
            <TextField
              id="input-with-icon-textfield"
              value={mobile}
              defaultValue={mobile}
              name="Driver Mobile Number"
              floatingLabelBold="Driver Mobile Number"
              label="Driver Mobile Number"
              className={classes.textField}
              fullWidth
              onChange={e => setMobile(e.target.value)}
            ></TextField>
            {/* <TextField
          id="input-one"
          type="file"
          name="driverPicture"
          style={{ display: "none" }}
          fullWidth
          onChange={nameImage}
          margin="normal"
          className={classes.textField}
        />
        <label htmlFor="input-one">
          <TextField
            label={imageName}
            fullWidth
            disable
            name=" Upload Driver Picture"
            margin="normal"
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className={classes.iconcolor}>
                  <PhotoCameraIcon />
                </InputAdornment>
              )
            }}
          />
        </label>
        <TextField
          id="input-two"
          type="file"
          name="Upload Driver's Driving License"
          style={{ display: "none" }}
          fullWidth
          onChange={nameImages}
          margin="normal"
          className={classes.textField}
        />
        <label htmlFor="input-two">
          <TextField
            label={fileName}
            fullWidth
            // name="Driver Picture"
            margin="normal"
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className={classes.iconcolor}>
                  <CloudUploadIcon />
                </InputAdornment>
              )
            }}
          />
        </label>
        <TextField
          id="input-three"
          type="file"
          name="Upload Driver's Identification Proof"
          style={{ display: "none" }}
          fullWidth
          onChange={nameImagess}
          margin="normal"
          className={classes.textField}
        />
        <label htmlFor="input">
          <TextField
            label={identityName}
            fullWidth
            margin="normal"
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className={classes.iconcolor}>
                  <CloudUploadIcon />
                </InputAdornment>
              )
            }}
          />
        </label> */}

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onSubmit}
            >
              <span className={classes.textTransform}>Register</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Driverregister;
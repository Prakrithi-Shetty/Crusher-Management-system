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
import Axios from "axios";

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
  },
  icon: {
    cursor: "pointer"
  }
}));

function Vehicleregister(props) {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState("  ");
  const [rdocuments, setRdocuments] = useState(" ");
  const [idocuments, setIdocuments] = useState(" ");
  const [registrationDocuments, setRegistrationDocuments] = useState(
    "Upload Vehicle Registration Documents"
  );
  const [insuranceDocuments, setInsuranceDocuments] = useState(
    "Upload Vehicle Insurance Documents"
  );

  const nameImage = e => {
    setRdocuments(e.target.files[0]);
    setRegistrationDocuments(e.target.files[0].name);
  };
  const nameImages = e => {
    setIdocuments(e.target.files[0]);
    setInsuranceDocuments(e.target.files[0].name);
  };

  let onsubmit = e => {
    e.preventDefault();
    console.log(vehicle, registrationDocuments, insuranceDocuments);

    let data = new FormData();
    data.append("vehicle_number", vehicle);
    data.append("registrationDocuments", registrationDocuments);
    data.append("insuranceDocuments", insuranceDocuments);

    Axios.post(
      "https://crusherproject.herokuapp.com/api/vehicle/registration/",
      data
    ).then(resp => {
      console.log(resp.data);
      // alert(resp.data.detail);
      props.history.push("/dashboard");
    });
  };

  return (
    <div>
      <Appbar />
      <div className={classes.space}>
        <Typography className={classes.font}>Register New Vehicle</Typography>
        <div className={classes.border}>
          <TextField
            id="input-with-icon-textfield"
            value={vehicle}
            floatingLabelText=" Enter Vehicle Number"
            label="Enter Vehicle Number"
            name=" Enter Vehicle Number"
            fullWidth
            onChange={e => setVehicle(e.target.value)}
            margin="normal"
            className={classes.textField}
          ></TextField>

          <TextField
            id="input-one"
            type="file"
            style={{ display: "none" }}
            fullWidth
            onChange={nameImage}
            margin="normal"
            className={classes.textField}
          />
          <label htmlFor="input-one">
            <TextField
              label={registrationDocuments}
              fullWidth
              margin="normal"
              className={classes.textField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className={classes.icon}>
                    <PhotoCameraIcon />
                  </InputAdornment>
                )
              }}
            />
          </label>
          <TextField
            id="input-two"
            type="file"
            name="ddocuments"
            style={{ display: "none" }}
            fullWidth
            onChange={nameImages}
            margin="normal"
            className={classes.textField}
          />
          <label htmlFor="input-two">
            <TextField
              label={insuranceDocuments}
              fullWidth
              // name="Driver Picture"
              margin="normal"
              className={classes.textField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className={classes.icon}>
                    <CloudUploadIcon />
                  </InputAdornment>
                )
              }}
            />
          </label>

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

export default Vehicleregister;
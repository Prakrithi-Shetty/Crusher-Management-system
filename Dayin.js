 import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { match } from "assert";
import { validate } from "@babel/types";
import Appbar from "./Appbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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

function Dayin(props) {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState(" ");
  const [tare, setTare] = useState(" ");
  const [gross, setGross] = useState(" ");
  const [alert, setAlert] = useState([]);
  const [selectedDrivername, setSelectedDrivername] = useState("");
  let [show, setShow] = useState(false);
  let [list, setList] = useState();
  let [id, setId] = useState();
  let [idState, setIDState] = useState(null);
  let [error, setError] = useState("");
  let [hide, setHide] = useState(false);
  let [drvi, setDrvi] = useState("");

  let AddHandler = e => {
    console.log(idState);
    axios
      .post("http://crusherproject.herokuapp.com/api/trip/add/", {
        vehicle_number: vehicle,
        tare_weight: tare,
        driver_id: idState
      })
      .then(resp => {
        console.log(resp.data);
        window.location.reload();
      });
  };

  let ConfirmHandler = e => {
    if (gross <= tare) {
      setHide(true);
    } else {
      if (window.confirm("Are you sure you want to save the changes?")) {
        setHide(false);
        axios
          .put(
            "http://crusherproject.herokuapp.com/api/trip/edit/" + id + "/",
            {
              vehicle_number: vehicle,
              tare_weight: tare,
              gross_weight: gross,
              driver_id: drvi
            }
          )
          .then(resp => {
            console.log(resp.data);
            props.history.push("./triptable");
          });
      }
    }
  };
  let changeHandler = e => {
    // setVehicle(e.target.value)

    let value = e.target.value.trim();
    console.log(list);
    let vehicle_filter = list.filter(i => {
      console.log(i.driver);

      console.log(i.vechile == value);
      let driver_id = i.driver;
      console.log(driver_id);
      setIDState(driver_id);
      return i.vechile == value;
    });
    console.log(vehicle_filter.length);
    if (vehicle_filter.length) {
      if (!vehicle_filter[0].driver) {
        window.confirm("plz add drvier for this vechile");
      } else {
        axios
          .post("http://crusherproject.herokuapp.com/api/trip/drafts/", {
            vehicle_number: value
          })
          .then(
            resp => {
              console.log(resp.data.trip_details[0].fields.trip_completed);
              if (resp.data.success) {
                if (resp.data.trip_details[0].fields.trip_completed) {
                  setShow(false);
                  setError("Please add tare weight");
                  console.log("true");
                } else {
                  console.log("true");
                  setShow(true);
                  setError("");
                  setTare(resp.data.trip_details[0].fields.tare_weight);
                  setId(resp.data.trip_details[0].pk);
                  setDrvi(resp.data.trip_details[0].fields.driver_id);
                }
              }
            },
            error => {
              setError("Please add tare weight");
            }
          );
      }
    } else {
      window.confirm("plz add vechilce");
    }

    console.log(value);
    setVehicle(value);
  };
  React.useEffect(() => {
    let key = localStorage.getItem("token");
    axios
      .get("https://crusherproject.herokuapp.com/api/vehicle/list/")
      .then(resp => {
        console.log(resp.data);

        setList(
          resp.data.map(i => {
            return {
              vechile: i.vehicle_number,
              driver: i.driver_id
            };
          })
        );
      });
  }, []);
  console.log(list);

  return (
    <div>
      <Appbar />
      <Link to="./dashboard">
        <h5 left>Dashboard</h5>
      </Link>
      <div className={classes.space}>
        <Typography className={classes.font}>Day In</Typography>
        <div className={classes.border}>
          <form>
            <div class="col s3 create-label2"></div>
            <TextField
              id="input-with-icon-textfield"
              value={vehicle}
              onChange={changeHandler}
              type="text"
              floatingLabelBold="Vehicle Number"
              className={classes.textField}
              // onKeyUp={vehicle_validation}

              label="Vehicle Number"
              fullWidth
              // onChange={e => setVehicle(e.target.value)}
            >
              <div class="col s2">
                <a class="btn-floating btn-small waves-effect waves-light agenda-addbtn">
                  <i class="material-icons">add</i>
                </a>
              </div>
              {list &&
                list.map((i, index) => {
                  return (
                    <div class="add-part">
                      {i ? <span class="chip left">{i} X</span> : ""}
                    </div>
                  );
                })}
            </TextField>
            <TextField
              id="input-with-icon-textfield"
              value={tare}
              defaultValue={tare}
              floatingLabelBold="Tare weight"
              className={classes.textField}
              label="Tare weight"
              fullWidth
              disabled={show ? true : false}
              onChange={e => setTare(e.target.value)}
              helperText={error}
            ></TextField>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={show ? true : false}
              onClick={AddHandler}
            >
              <span>Confirm</span>
            </Button>
            <TextField
              error={hide}
              id="input-with-icon-textfield"
              value={gross}
              defaultValue={gross}
              floatingLabelBold="Gross weight"
              className={classes.textField}
              label="Gross weight"
              fullWidth
              disabled={show ? false : true}
              helperText="please add gross wieght more than tare wieght"
              onChange={e => setGross(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={ConfirmHandler}
              disabled={show ? false : true}
            >
              <span>Add</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dayin;

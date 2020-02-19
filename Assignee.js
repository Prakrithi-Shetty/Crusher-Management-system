import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { match } from "assert";
import { validate } from "@babel/types";
import axios from  "axios";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Asynchronous from "./Vehicle";

import Appbar from "../Appbar";
import Axios from "axios";


const useStyles = makeStyles(theme => ({
  border: {
    paddingTop: 70,
    paddingLeft: 250,
    paddingRight: 250,
    paddingBottom: 200,

    
  },
  tittle: {
    marginTop: 60
  },
  pass: {
    float: "right",
    fontSize: 13
  },
  button: {
    textAlign: "center",
    marginTop: 60,
    marginRight: 0,
    marginLeft: 600,
    
  },
  font: {
    fontFamily: "Roboto medium",
    fontSize: 28,
   
    marginTop: 40,
    marginBottom: 30,
    marginLeft:350,
  },
  typo: {
    fontFamily: "Roboto medium",
    fontSize: 20,
    textAlign: "left",
    paddingTop: 50
  },
  radio: {
    paddingLeft: 20,
    paddingRight: 100,
    margin: 20
  },
  box:{
  marginLeft:300,
  },
  link: {
    float: "right"
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
    float: "center"
  }
}));

function Assignee(props) {
  const classes = useStyles();
  const [selectVehicleNumber, setselectVehicleNumber] = useState(" ");
  const [assignVehicleNumberList, setaassignVehicleNumberList] = useState([]);
  const[ name,setname]=useState("");
  const[nameList,setnameList]=useState([]);
  const[id,setid]=useState();
  const[ selectedDrivername,setSelectedDrivername]=useState("");
  const[ selectedVehicle,setselectedVehicle]=useState("");

  let vehicleList = e => {
    e.preventDefault();

    Axios.get("https://crusherproject.herokuapp.com/api/vehicle/list/").then(
      resp => {
        console.log(resp.data);
        console.log(selectVehicleNumber);

        setaassignVehicleNumberList(resp.data);
        console.log(assignVehicleNumberList);

        // alert(resp.data.detail);
        // props.history.push("/");
      }
    );
  };
  let userNameList = e => {
    e.preventDefault();

    Axios.get("https://crusherproject.herokuapp.com/api/driver/list/").then(
      resp => {
        console.log(resp.data);
        console.log(name);

        setnameList(resp.data.map( item =>{
            return {
              ...item,
              name: item.first_name +"  "+ item.last_name,
           
            }
        }));
        console.log(nameList);
        

        // alert(resp.data.detail);
        // props.history.push("/");
      }
    );
  };


  React.useEffect(() => {
  
    axios
      .get("http://crusherproject.herokuapp.com/api/driver/list/")
      .then(resp => {
        console.log("india")
        console.log(resp.data);
        let driver= resp.data.map(item=>item.id);
        console.log(driver)
        // localStorage.setItem(iddriver);
       
  
      });
    
  }, []);
  // console.log(list);

  let onSelectDriver = (e, value) => {
      console.log("",e,value);
      setSelectedDrivername(value);
      console.log(selectedDrivername);
  }
  let onSelectVehicle = (e, value) => {
    console.log("",e,value);
    setselectedVehicle(value);
    console.log(selectedVehicle);
}


  let onsubmit=e=>{
    e.preventDefault();
    const driverId = selectedDrivername.id;
    console.log(driverId);
    const vehicleId=selectedVehicle.id;
    console.log(vehicleId);

   
    Axios
    .patch("https://crusherproject.herokuapp.com/api/vehicle/edit/"+vehicleId+"/",
    {
      driver_id:driverId,
     
    })  
    .then(resp => {
       if( window.confirm("Do you want want to make any changes?"))
       {
         props.history.push("./Assignee");
       }
       else{
        props.history.push("./");
       }
      })
  }


  return (
    <div>
      <div className={classes.space}>
        <div className={classes.border}>
          
          <Appbar />
          
          <div >
          <div>
            <Typography className={classes.font}>Assign driver</Typography>
          </div>
          <br></br>
          {/* <Asynchronous /> */}
          <br></br>
          
          <Autocomplete
            id="combo-box-demo1"

            options={assignVehicleNumberList}
            getOptionSelected={(option, value) => {
              console.log("option, value", option, value);
              return option.vehicle_number === value.vehicle_number;
            }}
            onChange = {onSelectVehicle}
            getOptionLabel={option => option.vehicle_number}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField   className={classes.box} {...params} onChange={vehicleList} onKeyUp={e => setselectVehicleNumber(e.target.value)} label="Vehicle number" variant="outlined" fullWidth />
            )}
            
          />
          <br></br>
          <br></br>
          
          <Autocomplete
            id="combo-box-demo"
         
            options={nameList}
            getOptionSelected={(option, value) => {
              console.log("option, value", option, value);
              return option.name === value.name ;
            }}
            onChange = {onSelectDriver}
            getOptionLabel={option => option.name}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} className={classes.box} onChange={userNameList} onKeyUp={e => setname(e.target.value)} label="Driver Name" variant="outlined" fullWidth />
            )}
          />
         
          <br></br>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onsubmit}
          >
            <div className={classes.textTransform}>Assign</div>
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignee;

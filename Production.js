import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { match } from "assert";
import { validate } from "@babel/types";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Appbar from "../Appbar";
import Axios from "axios";




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
    textAlign: "center",
    marginTop: 10,
    marginRight:0,
    marginLeft:10,
    float: "right"

  },
  font: {
    fontFamily: "Roboto medium",
    fontSize: 35,
    textAlign:"center",
    
  },
  typo: {
    fontFamily: "Roboto medium",
    fontSize: 20,
    textAlign:"left",
    paddingTop:50,
    
  },
  radio:{

    paddingLeft:20,
    paddingRight:100,
    margin:20

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

 function Production() {
   const classes = useStyles();
   const [dust, setdust] = useState(" ");
   const [sixmm, setsixmm] = useState(" ");
   const [twelvemm, settwelvemm] = useState(" ");
   const [twentymm, settwentymm] = useState(" ");
   const [fourtymm, setfourtymm] = useState(" ");
   const [sixtymm, setsixtymm] = useState(" ");
   const [wetMix, setwetMix] = useState(" ");
   const [gravel, setgravel] = useState(" ");
   const [gsb, setgsb] = useState(" ");
   const [remarks, setsetremarks] = useState(" ");

    let onsubmit = e => {
   e.preventDefault();
    console.log(dust, sixmm, twelvemm,twentymm,fourtymm,sixtymm,wetMix,gravel,gsb,remarks);

    let data={
      dust:dust,
      six_mm:sixmm,
      twelve_mm:twelvemm,
      twenty_mm:twentymm,
      forty_mm:fourtymm,
      sixty_mm:sixtymm,
      wetmix:wetMix,
      gravel:gravel,
      gsb:gsb,
      remarks:remarks,
    }
    Axios.post(
      "http://crusherproject.herokuapp.com/api/production/add/",
      data
    ).then(resp => {
      console.log(resp.data);
      // alert(resp.data.detail);
      // props.history.push("/");
    });
    }
    


   

  return (
    <div>
     

      <div className={classes.space}>
              <div className={classes.border}>
        <Appbar/>
        
        <br></br>
        <div>
        <Typography className={classes.typo}>Adding values as 
        <input classname={classes.radio} type="radio"></input>
          <label classname={classes.radio}>Weights</label>
          <input type="radio"></input>
          <label>Percenatge</label></Typography>
          <div>
          </div>
          </div>
        <TextField
            id="input-with-icon-textfield"
             hintText="Dust"
             floatingLabelText=" Dust"
             label="Dust"
             type="number"
             onChange={e => setdust(e.target.value)}
             fullWidth
            //  value={Dust}
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="6mm"
             floatingLabelText=" 6mm"
             label="6mm"
             type="number"
             onChange={e => setsixmm(e.target.value)}
             fullWidth
             //value={sixmm}
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="12mm"
             floatingLabelText=" 12mm"
             label="12mm"
             type="text"
             onChange={e => settwelvemm(e.target.value)}
             fullWidth
             //value={twelvemm}
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="20mm"
             floatingLabelText=" 20mm"
             label="20mm"
             type="number"
             onChange={e => settwentymm(e.target.value)}
             fullWidth
             //value={twentymm}
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="40mm"
             floatingLabelText=" 40mm"
             label="40mm"
             type="text"
             onChange={e => setfourtymm(e.target.value)}
             fullWidth
             //value={fourtymm}
             
             className={classes.textField}
             />
             <TextField
            id="input-with-icon-textfield"
             hintText="60mm"
             floatingLabelText=" 60mm"
             label="60mm"
             type="number"
             onChange={e => setsixtymm(e.target.value)}
             fullWidth
             //value={sixtymm}
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="Wetmix"
             floatingLabelText=" Wetmix"
             label="Wetmix"
             type="number"
             onChange={e => setwetMix(e.target.value)}
             fullWidth
             //value={wetMix}
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="Gravel"
             floatingLabelText=" Gravel"
             label="Gravel"
             type="number"
             onChange={e => setgravel(e.target.value)}
             fullWidth
             //value={gravel}
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="GSB"
             floatingLabelText=" GSB"
             label="GSB"
             type="number"
             onChange={e => setgsb(e.target.value)}
             //value={gsb}
             fullWidth
             
             
             className={classes.textField}
             />
              <TextField
            id="input-with-icon-textfield"
             hintText="Remarks"
             floatingLabelText=" Remarks"
             label="Remarks"
             type="text"
             onChange={e => setsetremarks(e.target.value)}
             //value={remarks}
             fullWidth
             
             
             className={classes.textField}
             />
             
        
        
        
          
        
      <br></br>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onsubmit}
            >
          
            <div className={classes.textTransform}>Add</div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Production;
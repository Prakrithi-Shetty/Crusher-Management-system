import React ,{useState} from "react"
import { makeStyles } from "@material-ui/core/styles";
import { Grid,withStyles } from "@material-ui/core";
import Picture from "./Assets/crusher.jpg";
import LoginPage from "./LoginPage";

const useStyles = makeStyles(theme => ({
  padd: {
    paddingTop: 65,
    paddingBottom: 65,
    paddingLeft: 75,
    paddingRight: 75,
    backgroundColor: "#91cbff"
  },
  padd1: {
    boxShadow: "0 1.5px 3px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#fffff"
  }
}));

function useGrid() {
  const classes = useStyles();
  return (
    <div className={classes.padd}>
      <div className={classes.padd1}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={Picture}></img>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <LoginPage />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default useGrid;
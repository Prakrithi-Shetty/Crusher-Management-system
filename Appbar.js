import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logout:{
 textTransform:"capitalize"
  }
}));






 function ButtonAppBar(props) {
  const classes = useStyles();
  let LogoutHandler=(e)=>{
    if(window.confirm("Are you sure you want to logout?"))
   
    {
     localStorage.clear();
     props.history.push("./");
     }
     
     }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/dashboard">
        
            {/* <MenuIcon /> */}
          </Link>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button  className={classes.logout} color="inherit" onClick={LogoutHandler}>Logout</Button>
        </Toolbar>
      </AppBar>

     
    </div>
  );
}
export default withRouter(ButtonAppBar)
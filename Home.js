import React from "react";
import PropTypes from "prop-types";
import Appbar from "./Appbar";
import { withRouter, Link } from "react-router-dom";

import Icon from "@material-ui/core/Icon";
function Home(props) {
  return (
    <div>
      <Appbar />
      <Link to="./driver_registration">
        <h3>Add_Driver</h3>
      </Link>

      <Link to="./vechile_registration">
        <h3>Add_vehicle</h3>
      </Link>
    </div>
  );
}

Home.propTypes = {};

export default withRouter(Home);
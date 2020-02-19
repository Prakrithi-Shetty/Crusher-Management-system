
import React from "react";
import logo from "./logo.svg";

import LoginPage from "./LoginPage";
import useGrid from "./useGrid";
import Loginlink from "./Loginlink";
import SignUp from "./SignUp";
import Signuplink from "./Signuplink";
import Assignee from "./Assignee/Assignee"
import Vehicleregister from "./Vehicleregister"
import Driverregister from "./Driver_Register";
import Forgotpassword from "./Forgotpassword/Forgotpassword";
import Dayin from "./Dayin";
import Register from "./Register/Register";

import ConfirmationEmail from "./Confirmationemail/Confirmationemail";
import Home from "./Home";
import Production from "./Production/Production";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login/Login"



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/driver_registration"
            exact
            component={Driverregister}
          />
          <Route path="/Login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dayin" exact component={Dayin} />
          <Route path="/forgot" exact component={Forgotpassword} />
          <Route path="/vechileregister" exact component={Vehicleregister} />
         {/* // <Route path="/triptable" exact component={Triptable} /> */}
         <Route path="/Production" exact component={Production} />
         <Route path="/Assignee" exact component={Assignee} />

          <Route
            path="/account-confirm-email/:key/"
            exact
            component={ConfirmationEmail}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
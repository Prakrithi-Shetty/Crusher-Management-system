import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
function ConfirmationEmail(props) {
  let [show, setShow] = useState(false);
  useEffect(() => {
    let uid = props.match.params.key;
    console.log(uid);
    // alert(uid)
    axios
      .post(
        `http://crusherproject.herokuapp.com/registration/account-confirm-email/${uid}/`
      )

      .then(resp => {
        setShow(true);
      });
  }, []);
  return (
    <div>
      {show ? (
        <h2>
          Registered Successfull..! Click here to<Link to="/"> Login</Link>
        </h2>
      ) : (
        <div>
          <h3>Registration successfull</h3>
        </div>
      )}
    </div>
  );
}

export default withRouter(ConfirmationEmail);

// import React, { useState, useEffect } from "react";
// import Axios from "axios";

// function confirmationEmail(props) {
//   let [show, setShow] = useState(false);
//   useEffect(() => {
//     alert(props.match.params.key);
//     Axios.post(
//       `http://crusherproject.herokuapp.com/registration/account-confirm-email/${props.match.params.key}/`
//     ).then(resp => {
//       setShow(true);
//     });
//   }, []);

//   return (
//     <div>
//       {show ? (
//         <h3>Registration successfull</h3>
//       ) : (
//         <div>
//           <h3>Registration successfull</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default confirmationEmail;
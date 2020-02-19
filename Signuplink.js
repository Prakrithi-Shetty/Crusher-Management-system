import React, { PureComponent } from 'react';
import Picture from "./Assets/crusher.jpg";
import Signup from "./SignUp";
import "./Login.css";

class Signuplink extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className={"main"}>
         <div className={"grid"}>
             
         <div classname={"img"}>
             <img src={Picture} alt="hi" />
        </div>   
        <div className={"pic"}>
            <Signup/>
        </div> 
         </div> 
         </div>  
        )
    }
}

export default Signuplink;
import React, { PureComponent } from 'react';
import Picture from "./Assets/crusher.jpg";
import LoginPage from "./LoginPage";
import "./Login.css";

class Loginlink extends PureComponent {
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
            <LoginPage/>
        </div> 
         </div> 
         </div>  
        )
    }
}

export default Loginlink;
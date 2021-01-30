import React from "react";
import "./NavBar.css";
import { NavLink} from "react-router-dom";

export default function NavBar(props){
    return(
        <div className="navbar">
            <NavLink to="/home">
                {/* <img className="logo" src="./Images/logo.png" alt="logo"/> */}
            </NavLink>
            <div className="cart-logo-container">
                <NavLink to="/cartitems">
                    <img className="cart-logo" src="./Images/cartLogo.jpg" alt=""/>
                    <span className="cart-item-count">{props.count}</span>
                </NavLink>
            </div>            
        </div>
    )
}

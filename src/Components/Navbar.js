import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(){

    return <>
        <div id="Navbar" Link>
            <h1 
                className="logo"
                >
                    <NavLink to="/" exact>MovieBuoy</NavLink>
                    
            </h1>
        </div>
    </>

}

export default Navbar;
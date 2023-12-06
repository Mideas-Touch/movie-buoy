import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){

    return <>
        <div id="Navbar" Link>
                    <Link to="/" exact><h1 className="logo">MovieBuoy</h1></Link>
        </div>
    </>

}

export default Navbar;
import React from "react";
// import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(){

    return <>
        <div className="text-lg text-yellow-300" >
                    <Link to="/" ><h1 className="text-3xl text-yellow-400">MovieBuoy</h1></Link>
        </div>
    </>

}

export default Navbar;
import React from "react";

function Navbar(){

    return <>
        <div id="Navbar">
            <h1 
                className="logo"
                >
                    MovieBuoy
            </h1>
            <form
                className="Searchbox"
            >
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Search..." />
            </form>
        </div>
    </>

}

export default Navbar;
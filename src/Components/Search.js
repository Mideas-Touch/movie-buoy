import React from "react";
// import "../css/Search.css";

function Search(){

    return<>
        <form
                className="Searchbox"
            >
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Search..." />
        </form>
    </>
}

export default Search;
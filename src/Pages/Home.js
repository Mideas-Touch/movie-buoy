import React from "react";
import Movies from "../Components/Movies"
import Navbar from "../Components/Navbar";
import Search from "../Components/Search"
import "../css/Home.css"

function Home(){

    return <>
        
        <h1>Recommended</h1>
        <h2>Watchlist</h2>
        <h2>Favorites</h2>
        <Search />
    </>
}

export default Home;
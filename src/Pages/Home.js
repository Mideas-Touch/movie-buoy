import React from "react";
import Movies from "../Components/Movies"
import Navbar from "../Components/Navbar";
import Search from "../Components/Search"
import "../css/Home.css"

function Home(){

    return <>
        <Navbar />
        <h1>Recommended</h1>
        <h2>Watchlist</h2>
        <Movies />
        <h2>Favorites</h2>
        <Search />
    </>
}

export default Home;
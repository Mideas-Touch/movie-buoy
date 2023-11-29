import React from "react";
import Movies from "../Components/Movies"
import Navbar from "../Components/Navbar";
import Search from "../Components/Search"
import "../css/Home.css"

function Home(){

    return <>
        <Navbar />
        <Movies />
        <Search />
    </>
}

export default Home;
import React from "react";
// import Movies from "../Components/Movies"
// import Navbar from "../Components/Navbar";
// import Search from "../Components/Search"
import "../css/Home.css"

import { MdFavoriteBorder } from "react-icons/md"
import { CiStar } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import image_1 from "../images/image_1.jpeg"

function Home(){

    return <>
    <div className="container">
    <div 
            id="card"
            >
            <img
            // width={500}
            // height={400}
            id="poster"
            // src={`https://image.tmdb.org/t/p/original/${poster || backdrop_path}`}
            src={image_1}
            alt="placeholder"
            >
        </img>
        <div className="title-love">
            <h2 id="title">Some title</h2>
            <i id="love"><MdFavoriteBorder /></i>
        </div>
        
            <div
                className="star-timestamp-section"
            >
                <div id="stars">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </div>
                <h3 id="timestamp">00:00</h3>
            </div>

            <div
                className="buttons"
            >
                <button
                    id="play"
            >
                <CiPlay1 />
                </button>
                <button
                id="watchlist"
            >
                <CiBookmarkPlus /> Watchlist
                </button>
                

            </div>
        </div>
    </div>
        
        
        {/* <h1>Recommended</h1>
        <h2>Watchlist</h2>
        <h2>Favorites</h2> */}
        {/* <Search /> */}
    </>
}

export default Home;
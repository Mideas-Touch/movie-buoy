import React from "react";
// import Movies from "../Components/Movies"
// import Navbar from "../Components/Navbar";
// import Search from "../Components/Search"
// import "../css/Home.css"

import { MdFavoriteBorder } from "react-icons/md"
import { CiStar } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import image_1 from "../images/image_1.jpeg"

function Home(){

    return <>
        <div className="">
            <div id="player-card">
                <img
                // width={500}
                // height={400}
                id="poster"
                // src={`https://image.tmdb.org/t/p/original/${poster || backdrop_path}`}
                src={image_1}
                alt="placeholder"
                >
                </img>
            </div>
            <div className="title-love">
                <h2 id="title">Some title</h2>
                <i id="love"><MdFavoriteBorder /></i>
            </div>
            
                <div
                    id="star-timestamp-section"
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
                    <i><CiBookmarkPlus /></i> Watchlist
                    </button>
                    {/* <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel turpis nec augue gravida ullamcorper. Integer tempus elit elit, eu ultricies tortor porttitor at. Integer sed efficitur massa. Mauris imperdiet justo mauris. Aenean ligula lectus, viverra in sodales eget, venenatis feugiat quam. </p> */}
                </div>
                <div className="">
                        <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel turpis nec augue gravida ullamcorper. Integer tempus elit elit, eu ultricies tortor porttitor at. Integer sed efficitur massa. Mauris imperdiet justo mauris. Aenean ligula lectus, viverra in sodales eget, venenatis feugiat quam. </p>
                </div>
            
        </div>
        
        
        
        {/* <h1>Recommended</h1>
        <h2>Watchlist</h2>
        <h2>Favorites</h2> */}
        {/* <Search /> */}
    </>
}

export default Home;
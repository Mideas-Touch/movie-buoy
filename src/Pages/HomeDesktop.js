import React from "react";
import { MdFavoriteBorder } from "react-icons/md"
import { CiStar } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import image_1 from "../images/image_1.jpeg"
import "../css/HomeDesktop.css"

function HomeDesktop(){

    return <>
    <div className="container">
        <div className="container" id="left">
            <div 
                id="player-card"
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
            </div>
        </div>
        <div className="container" id="right">
            <div className="title-love">
                <h2 id="title">Some title</h2>
                <h3 id="timestamp">00:00</h3>
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
            </div>
            <div id="overview">
                <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel turpis nec augue gravida ullamcorper. Integer tempus elit elit, eu ultricies tortor porttitor at. Integer sed efficitur massa. Mauris imperdiet justo mauris. 
                    Aenean ligula lectus, viverra in sodales eget, venenatis feugiat quam.
                </p>
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

            </div>
        </div>
    </div>
        
        
        {/* <h1>Recommended</h1>
        <h2>Watchlist</h2>
        <h2>Favorites</h2> */}
        {/* <Search /> */}
    </>
}

export default HomeDesktop;
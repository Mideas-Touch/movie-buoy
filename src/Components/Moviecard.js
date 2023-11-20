import React from "react";
import image_1 from "../images/image_1.jpeg"
import "../css/Moviecard.css";

function Moviecard(){


    return <>
    <div className="card">
        <img
            id="poster"
            src={image_1}
            alt="placeholder"
            >
        </img>

            <i>staricon</i>
            <span>favicon</span>
            <h2>Movie Title</h2>
            <button
                id="watchlist"
            >
                + Watchlist
            </button>
            <button
            >
                play
            </button>
    </div>
       
    </>
}

export default Moviecard;
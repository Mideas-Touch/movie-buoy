import React, {  useEffect, useState } from "react";
import image_1 from "../images/image_1.jpeg"
// import "../css/Moviecard.css";
import { MdFavoriteBorder } from "react-icons/md"
import { CiStar } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import Movies from "./Movies";

function Movie({key, date, title, description, poster}){


    return <>
        <div>
            <img
            id="poster"
            src={poster}
            alt="placeholder"
            >
        </img>
            <div
                className="icons-section"
            >
                <CiStar />
                <MdFavoriteBorder />
            </div>
            <h2>{title}</h2>
            <div
                className="buttons"
            >
                <button
                id="watchlist"
            >
                <CiBookmarkPlus /> Watchlist
                </button>
                <span></span>
                <span></span>
                <button
            >
                <CiPlay1 />
                </button>

            </div>
        </div>
    </>
}

export default Movie;
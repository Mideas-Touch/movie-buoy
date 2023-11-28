import React, {  useEffect, useState } from "react";
import image_1 from "../images/image_1.jpeg"
import "../css/Movie.css";
import { MdFavoriteBorder } from "react-icons/md"
import { CiStar } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import Movies from "./Movies";

function Movie({key, date, title, description, poster, backdrop_path}){


    return <>
        <div 
            className="card"
            key={key}>
            <img
            width={300}
            height={400}
            id="poster"
            src={`https://image.tmdb.org/t/p/original/${poster || backdrop_path}`}
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
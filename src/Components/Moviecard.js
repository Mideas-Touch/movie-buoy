import React, {  useEffect, useState } from "react";
import image_1 from "../images/image_1.jpeg"
import "../css/Moviecard.css";
import { MdFavoriteBorder } from "react-icons/md"
import { CiStar } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";

function Moviecard(){
    // const [movies, setMovies] = useState[{}]


    const apiUrl = 'https://api.themoviedb.org/3/movie/11?api_key=6b8f7686219cfd2cee079462061c954e'

    async function getMovies(url){
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    useEffect(()=>{
        getMovies(apiUrl)
    }, [])

    return <>
    <div className="card">
        <img
            id="poster"
            src={image_1}
            alt="placeholder"
            >
        </img>
            <div
                className="icons-section"
            >
                <CiStar />
                <MdFavoriteBorder />
            </div>
            <h2>Movie Title</h2>
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

export default Moviecard;
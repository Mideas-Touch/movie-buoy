// import React from "react";
// import Moviecard from "../Components/Moviecard"

// function Movies(movie){

//     // const {movieId, date, title, description, rating, poster, time, average_vote} = movie;

//     // const cardList = movies?.map(movie => {
//     //     return <Moviecard key={movie.movieId} date={movie.date} title={movie.title} description={movie.description} rating={movie.rating} 
//     //     poster={movie.poster} time={movie.time} average_vote={movie.average_vote}/>
//     // })

//     return <>
//     <Moviecard />
//     </>
// }

// export default Movies;

import React, {  useEffect, useState } from "react";
// import image_1 from "../images/image_1.jpeg"
import "../css/Moviecard.css";
import { MdFavoriteBorder } from "react-icons/md"
import { CiStar } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";
import Moviecard from "./Moviecard";

function Movies(){
    const [movies, setMovies] = useState([]);
    const [errors, setErrors] = useState(null)

    let idsArray = [];

    const generateRandomIds = (arr)=>{
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 100) + 1);
        }
        console.log(idsArray)

        if (idsArray.length >= 10){
            // console.log(idsArray)
            batchLoadMovies(idsArray)
        }
    }


    const batchLoadMovies = (ids) =>{
            ids?.forEach(element => {
                // console.log(element)
                getMovies(element)
            }); 
    }

   
    useEffect(()=>{
        generateRandomIds(idsArray)
    }, [])


    async function getMovies(id){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6b8f7686219cfd2cee079462061c954e`)
            .catch(error =>{
                setErrors(errors)
            })

        const data = await response.json()
        // console.log(data)
        if (data.id){
            const movies = [...Array(1)].map((_, i) =>({
                movieId: data.id,
                date: data.release_date,
                title: data.original_title,
                description: data.overview,
                rating: data.popularity,
                poster: data.poster_path,
                time: data.runtime,
                average_vote: data.vote_average
    
            }
            ))
            console.log(movies)
            setMovies(movies)  
            
        } 
        
        
    }

    return <>
    {/* <div className="card">
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
    </div> */}
    <Moviecard />
       
    </>
}

export default Movies;
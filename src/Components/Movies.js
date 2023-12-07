import React, {  useEffect, useState } from "react";
// import image_1 from "../images/image_1.jpeg"
import Movie from "./Movie";
import "../css/Movies.css"

const Movies = () =>{
    const [movies, setMovies] = useState([]);
    const [errors, setErrors] = useState(null)

    let idsArray = [];

    const generateRandomIds = (arr)=>{
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 10) + 1);
        }
        console.log(idsArray)

        if (idsArray.length >= 5){
            // console.log(idsArray)
            batchLoadMovies(idsArray)
        }
    }


    const batchLoadMovies = (ids) =>{
            removeDuplicates(ids)
            ids?.forEach(id => {
                // console.log(element)
                getMovies(id)
            }); 
    }

    const removeDuplicates = (movieArray) =>{
        return movieArray?.filter((item,
            index) => movieArray.indexOf(item) === index);
    }
   
    useEffect(()=>{
        generateRandomIds(idsArray)
    })


    async function getMovies(id){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6b8f7686219cfd2cee079462061c954e`)
            .catch(error =>{
                setErrors(errors)
            })

        const data = await response.json()
        console.log(data)
        if (data.id){
            const movies = [...Array(1), {data}].map((_, i) =>({
                movieId: data.id,
                date: data.release_date,
                title: data.original_title,
                description: data.overview,
                rating: data.popularity,
                poster: data.poster_path,
                backdrop: data.backdrop_path,
                time: data.runtime,
                average_vote: data.vote_average
    
            }))
            removeDuplicates(movies)
            // console.log(movies)
            // console.log(typeof(movies))
            setMovies(movies)  
            
        } 
        
        
    }


    return <>
    <div className="cards">
        {movies?.map(movie =>(
            <Movie
                key={movie.movieId}
                date={movie.date} 
                title={movie.title} 
                description={movie.description} 
                rating={movie.rating} 
                poster={movie.poster} 
                time={movie.time} 
                average_vote={movie.average_vote}
            />
        ))}
    </div>
       
    </>
}

export default Movies;
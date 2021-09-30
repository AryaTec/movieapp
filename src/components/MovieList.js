import './MovieList.css';
import React from 'react';
const MovieList=props => {
    const movieimg=props.movieimg.map
    ((movieimg)=>{
        return <img alt={movieimg.Title} key={movieimg.imdbID} src={movieimg.Poster}/>
        
    })
    return <div className="movie-list">{movieimg}</div>;
};
export default MovieList;
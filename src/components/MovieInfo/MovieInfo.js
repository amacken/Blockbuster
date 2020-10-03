import React from 'react';
import './MovieInfo.css';

export default function MovieInfo(props){
    return (
            <div className="movie-info">
                <h1>{props.movie.Title}</h1>
                <img src={props.movie.Poster} alt={props.movie.Title} />
				<h3>Genre: {props.movie.Genre}</h3>
				<h4>Plot: {props.movie.Plot}</h4>
				<h4>{props.movie.Runtime}</h4>
            </div>
    )
}
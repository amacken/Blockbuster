import React from 'react';
import './MovieInfo.css';

export default function MovieInfo(props){
    return (
            <div className="movie-info">
                <h3>{props.movie.Title}</h3><br/>
                <img src={props.movie.Poster} alt={props.movie.Title} /><br/>
				<h3>Genre: {props.movie.Genre}</h3><br/>
				<h4>Plot: {props.movie.Plot}</h4><br/>
				<h4>Runtime: {props.movie.Runtime}</h4>
            </div>
    )
}
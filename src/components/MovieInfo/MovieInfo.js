import React from 'react';
import './MovieInfo.css';

export default function MovieInfo(props){
    return (
        <>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={props.query.title}
                        onChange={props.handleChange}
                    />
                    <input type="submit" value="Search For Movie" />
                </form>
                {Object.keys(props.movie).length > 0 && <MovieInfo movie={props.movie} />}
            </div>
            <div className="movie-info">
                <h1>{props.movie.Title}</h1>
                <img src={props.movie.Poster} alt={props.movie.Title} />
				<h3>Genre: {props.movie.Genre}</h3>
				<h4>Plot: {props.movie.Plot}</h4>
				<h4>{props.movie.Runtime}</h4>
            </div>
        </>
    )
}
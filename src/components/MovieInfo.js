import React from 'react';

export default function MovieInfo(props){
    return (
        <>
            <div>
                <h1>{props.movie.Title}</h1>
            </div>
        </>
    )
}
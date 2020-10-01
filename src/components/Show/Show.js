import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
let endpoint = '/api';

export default function Show(props) {
    return (
        <div className="Page-wrapper">
            {Object.keys(movie).length > 0 ? (
				<div>
					<h1>{movie.Title.toUpperCase()} Show Page.</h1>
					<p>
						{movie.Poster}
					</p>
				</div>
			) : (
				<h1>Nothing found on {props.match.params.id}.</h1>
			)}
			<h3>
				<Link to={'/'}>Go Back Home</Link>
				<br />
				<Link to={`/${movie._id}/edit`}>Go To Edit Page</Link>
			</h3>
        </div>
    )
}
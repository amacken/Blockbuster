import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
let endpoint = '/api';

export default function Edit(props) {
    const [editMovie, updateEditMovie] = useState({ ...props.movie });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${endpoint}/${props.match.params.id}`);
                const data = await response.json();
                await updateEditMovie(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editMovie)
            });
            const data = await response.json();
        } catch (error) {
            console.error(error)
        }
    };

    const handleChange = event => {
        updateEditMovie({ ...editMovie, [event.target.id]: event.target.value });
    };

    return (
        <div className="Page-wrapper">
            {Object.keys(editMovie).length > 0 ? (
				<div>
					<h1>{editMovie.Title.toUpperCase()} Edit Page.</h1>
				</div>
			) : (
				<h1>Nothing found on {props.match.params.id}.</h1>
			)}
            <h3>
                <Link to={'/'}>Go Back Home</Link>
            </h3>
        </div>
    );
}
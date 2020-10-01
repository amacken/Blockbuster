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

    
}
import React, { useState, useEffect } from "react";
import axios from "axios";

import Show from "../Show/Show";

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/movies");
      setMovies(response.data);
    }
    fetchData();
  }, [movies]);

  const showMovies = movies.map((movie, i) => {
    return (
      <div key={i}>
        <Show movie={movie} isLoggedIn={props.isLoggedIn} />
      </div>
    );
  });

  return <div>{showMovies}</div>;
};

export default MovieList;
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import MovieInfo from "./components/MovieInfo";
import './App.css';

function App(props) {
  const [query, updateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + '930a61fb',
		option: '&t=',
		title: '',
		searchURL: ''
  });

  const [movie, updateMovie] = useState({})
  useEffect(() => {
    query.searchURL.length > 0 &&
      (async () => {
        try {
          const response = await fetch(query.searchURL);
          const data = await response.json();
          await updateMovie({ ...movie, ...data });
          await updateQuery({ ...query, searchURL: '', title: '' });
        } catch (error) {
          console.error(error);
        }
      })();
  }, [query]);
  
  const handleChange = event => {
		updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
	};

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: `${query.baseURL}${query.apiKey}${query.option}${query.title}`
		});
	};
  return (
    <div className="Page-wrapper">
			<h1>Blockbuster</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
				/>
				<input type="submit" value="Search For Movie" />
			</form>
			{Object.keys(movie).length > 0 && <MovieInfo movie={movie} />}
		</div>
  );
}

export default App;

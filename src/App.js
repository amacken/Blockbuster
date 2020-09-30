import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App(props) {
  const [query, upDateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + '930a61fb',
		option: '&t=',
		title: '',
		searchURL: ''
  });
  
  const handleChange = event => {
		upDateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
	};

	const handleSubmit = event => {
		event.preventDefault();
		upDateQuery({
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
			<a href={query.searchURL}>{query.searchURL}</a>
		</div>
  );
}

export default App;

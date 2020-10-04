import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import MovieInfo from "./components/MovieInfo/MovieInfo";
import NavBar from "./components/NavBar/NavBar";
import MovieList from "./components/MovieList/MovieList";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import LogOut from "./components/LogOut/LogOut";
// import Show from './components/Show/Show';
// import Edit from './components/Edit/Edit';
import './App.css';

function App(props) {
	const [state, setState] = useState({
		email: "",
		password: "",
		isLoggedIn: false,
	});

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn]);

	const handleLogOut = () => {
		setState({
			email: "",
			password: "",
			isLoggedIn: false,
		});
		localStorage.clear();
	};

	const handleInput = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const handleSignUp = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("http://localhost:3001/users/signup", {
				email: state.email,
				password: state.password,
			});
			console.log(response);
			localStorage.token = response.data.token;
			setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogIn = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("http://localhost:3001/users/login", {
				email: state.email,
				password: state.password,
			});
			localStorage.token = response.data.token;
			setIsLoggedIn(true);
		} catch (error) {
			console.log(error);
		}
	};

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
		<NavBar isLoggedIn={isLoggedIn} />
		<br/>
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title:</label>
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
		<div className="body">
			<Switch>
				<Route 
					path="/signup"
					render={(props) => {
						return (
							<SignUp isLoggedIn={isLoggedIn} handleInput={handleInput} handleSignUp={handleSignUp} />
						);
					}}
				/>
				<Route
					path="/logout"
					render={(props) => {
						return (
							<LogOut isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
						);
					}} 
				/>
				<Route 
					path="/login"
					render={(props) => {
						return (
							<LogIn isLoggedIn={isLoggedIn} handleInput={handleInput} handleLogIn={handleLogIn} />
						);
					}}
				/>
				<Route 
					path="/"
					render={() =>{
						return (
							<>
								<MovieList isLoggedIn={isLoggedIn} />
							</>
						)
					}}
				/>
			</Switch>
		</div>
	</div>
  );
}

export default App;

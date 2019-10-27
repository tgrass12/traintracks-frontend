import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import Auth from './Auth';
import Journal from './Journal';
import Calendar from './Calendar';
import Dashboard from './Dashboard';
import Loading from './Loading';
import LandingHero from './LandingHero';
import NewUserSetup from './NewUserSetup';
import {
	setAuthenticated,
	setUser
} from '../store/actions/user';

let Main = () => {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.user.isAuthenticated);
	const isLoading = useSelector(state => state.user.isLoading);

	let onAuth = (username, password, isRegister, email) => {
		//TODO: move to redux store, AUTHENTICATE_USER action
		const payload = {
			username: username,
			password: password
		};

		if (isRegister) {
			payload.email = email;
		}

		let api = isRegister ? '/api/auth/register' : '/api/auth/login';

		return fetch(api, {
	  		method: 'POST',
	  		body: JSON.stringify(payload),
	  		headers: {
	    		'Content-Type': 'application/json'
	    	}
		}).then(res => res.json())
		.then((user) => {
			if (user.err) {
				throw new Error(user.err);
			}
			let pathToLoad;

			if (isRegister) {
				pathToLoad = '/setup';
			}

			else {
				pathToLoad = location.state ? location.state.referrer : '/';
			}

			dispatch(setAuthenticated(true));
			dispatch(setUser(user));
			history.push(pathToLoad);
			return true;
		})
		.catch(err => {
			console.log(err);
			return false
		});
	}

	return (
		<div className="main">
			{ isLoading &&
				<Loading />
			}
			{ !isLoading &&
				<Switch>
					<Route path="/login" render={() => <Auth onAuth={onAuth}/>} />
					<Route path="/register" render={() => <Auth isRegister onAuth={onAuth}/>} />
					<AuthenticatedRoute path="/setup" component={NewUserSetup} />
					<AuthenticatedRoute path="/journal" component={Journal} />
					<AuthenticatedRoute path="/calendar" component={Calendar} />
					<Route
						path="/" exact
						component={isAuthenticated ? Dashboard : LandingHero}
					/>
				</Switch>
			}
		</div>
	)
}

export default Main;

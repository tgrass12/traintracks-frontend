import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import Auth from './Auth';
import Journal from './Journal';
import Calendar from './Calendar';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import LandingHero from './LandingHero';
import {
	setAuthenticated,
	setUser
} from '../store/actions/user';

let Main = () => {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.user.isAuthenticated);

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

		fetch(api, {
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
			const pathToLoad = location.state ? location.state.referrer : '/';
			dispatch(setAuthenticated(true));
			dispatch(setUser(user));
			history.push(pathToLoad);
		})
		.catch(err => {
			console.log(err);
		});
	}

	return (
		<div className="main">
			{ isAuthenticated &&
				<Sidebar/>
			}
			<Switch>
				<Route path="/login" render={() => <Auth onAuth={onAuth}/>} />
				<Route path="/register" render={() => <Auth isRegister onAuth={onAuth}/>} />
				<AuthenticatedRoute path="/journal" component={Journal} />
				<AuthenticatedRoute path="/calendar" component={Calendar} />
				{
					<Route 
						path="/" exact 
						component={isAuthenticated ? Dashboard : LandingHero}
					/>
				}
			</Switch>
		</div>
	)
}

export default Main;
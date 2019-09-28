import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '../Auth/auth0-wrapper';
import Journal from './Journal';
import Calendar from './Calendar';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import LandingHero from './LandingHero';

import { 
	fetchUser
} from '../store/actions/user';

let Main = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
	const { isAuthenticated, loading } = useAuth0();

	useEffect(() => {
		dispatch(fetchUser(user.username));
	}, [dispatch, user.username]);

	return (
		<div className="main">
			{ isAuthenticated &&
				<Sidebar/> 
			}
			<Switch>
				<AuthenticatedRoute path="/journal" component={Journal} />
				<AuthenticatedRoute path="/calendar" component={Calendar} />
				{ !loading &&
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
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Journal from './Journal';
import Calendar from './Calendar';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import { 
	fetchUser
} from '../store/actions/user';

let Main = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
	useEffect(() => {
		dispatch(fetchUser(user.username));
	}, [dispatch, user.username]);

	return (
		<div className="main">
			<Sidebar/>
			<Route path="/" exact component={Dashboard} />
			<Route path="/journal" component={Journal} />
			<Route path="/calendar" component={Calendar} />
		</div>
	)
}

export default Main;
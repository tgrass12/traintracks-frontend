import React from 'react';
import { Route } from 'react-router-dom';
import Journal from './Journal';
import Calendar from './Calendar';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

let Main = () => {

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
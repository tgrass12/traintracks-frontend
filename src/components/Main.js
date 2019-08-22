import React from 'react';
import { Route } from 'react-router-dom';
import Journal from './Journal/Journal';
import CalendarContainer from './Calendar/CalendarContainer';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Sidebar';

let Main = () => {

	return (
		<div className="main">
			<Sidebar/>
			<Route path="/" exact component={Dashboard} />
			<Route path="/journal" component={Journal} />
			<Route path="/calendar" component={CalendarContainer} />
		</div>
	)
}

export default Main;
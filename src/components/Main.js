import React from 'react';
import { Route } from 'react-router-dom';
import DailyJournal from './DailyJournal/DailyJournal';
import CalendarContainer from './Calendar/CalendarContainer';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Sidebar';

let Main = () => {

	return (
		<div className="main">
			<Sidebar/>
			<Route path="/" exact component={Dashboard} />
			<Route path="/journal" component={DailyJournal} />
			<Route path="/calendar" component={CalendarContainer} />
		</div>
	)
}

export default Main;
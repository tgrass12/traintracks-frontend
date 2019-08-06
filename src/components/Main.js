import React from 'react';
import { Route } from 'react-router-dom';
import DailyJournal from './DailyJournal/DailyJournal';
import CalendarContainer from './Calendar/CalendarContainer';
let Main = () => {

	return (
		<div className="main">
			<Route path="/journal" component={DailyJournal} />
			<Route path="/calendar" component={CalendarContainer} />
		</div>
	)
}

export default Main;
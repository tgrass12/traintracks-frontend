import React from 'react';
import {formatDateFullNamed, setToNextDay, setToPrevDay} from '../../shared/util';

let Header = ({date, setDate}) => {

	let formattedDate = formatDateFullNamed(date);
	let prevDay = () => {
		setDate(setToPrevDay(date));
	}

	let nextDay = () => {
		setDate(setToNextDay(date));
	}

	let openCalendar = () => {
		//Navigate to calendar route
	}

	//TODO: Refactor to HOC
	return (
		<div className='journal-header'>
			<div className="header-date">
				<span className="icon" onClick={prevDay}>chevron_left</span>
				{formattedDate}
				<span className="icon" onClick={nextDay}>chevron_right</span>
			</div>
			<span className="icon calendar-icon" onClick={openCalendar}>calendar_today</span>
		</div>
	)
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import {formatDateFullNamed, setToNextDay, setToPrevDay} from '../../shared/util';

let Header = ({date, setDate}) => {

	let formattedDate = formatDateFullNamed(date);
	let prevDay = () => {
		setDate(setToPrevDay(date));
	}

	let nextDay = () => {
		setDate(setToNextDay(date));
	}

	//TODO: Refactor to HOC
	return (
		<div className='journal-header'>
			<div className="header-date">
				<span className="icon" onClick={prevDay}>chevron_left</span>
				{formattedDate}
				<span className="icon" onClick={nextDay}>chevron_right</span>
			</div>
			<Link to="/calendar"> 
				<span className="icon calendar-icon">calendar_today</span>
			</Link>
		</div>
	)
}

export default Header;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchJournal } from '../../store/actions/journal';
import { 
	formatDateFullNamed,
	setToNextDay,
	setToPrevDay
} from '../../shared/util';

let Header = (props) => {
	const dispatch = useDispatch();
	const date = useSelector(state => state.journal.selectedDate);
	let formattedDate = formatDateFullNamed(date);
	
	let prevDay = () => {
		let newDate = setToPrevDay(date);
		dispatch(fetchJournal(newDate));
		props.history.push(`/journal?date=${newDate}`);
	}

	let nextDay = () => {
		let newDate = setToNextDay(date);
		dispatch(fetchJournal(newDate));
		props.history.push(`/journal?date=${newDate}`);
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

export default withRouter(Header);
import React from 'react';
import dateFns from 'date-fns';

let Header = ({date, setDate}) => {
	let formattedMonthYear = dateFns.format(date, 'MMMM YYYY');

	let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(
			d => (
				<div 
					className='day-label'
					key={d}>
					{d}
				</div>
				)
			);

	let nextMonth = async () => {
		setDate(dateFns.addMonths(date, 1));
	};

	let prevMonth = () => {
		setDate(dateFns.subMonths(date, 1));
	};
	
	return (
		<div className="header">
			<div className="header-month">
				<div className="icon" onClick={prevMonth}>chevron_left</div>
				{formattedMonthYear}
				<div className="icon" onClick={nextMonth}>chevron_right</div>
			</div>
			<div className="header-days">
				{days}
			</div>
		</div>
	)
}

export default Header;
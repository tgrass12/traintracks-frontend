import React from 'react';

let Day = ({day, active, selected, setDate, dietLogged}) => {

	let handleClick = () => {
		setDate(day);
	}
	return (
		<div 
			className={
				`day-cell 
				${active ? '' : 'disabled'}
				${selected ? 'selected' : ''}`
			}
			onClick={handleClick}>
			<div className="day-banner">
				{dietLogged && 
					<div className='diet-logged-icon' />
				}
				<span>{day.getDate()}</span>
			</div>
		</div>
	);
}

export default Day;
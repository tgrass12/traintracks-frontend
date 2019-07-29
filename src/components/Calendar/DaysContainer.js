import React, {useEffect} from 'react';
import dateFns from 'date-fns';
import Day from './Day';

let DaysContainer = ({date, setDate, datesWithEntries}) => {
	let startOfMonth = dateFns.startOfMonth(date);
	let endOfMonth = dateFns.endOfMonth(startOfMonth);
	let startDate = dateFns.startOfWeek(startOfMonth);
	let endDate = dateFns.endOfWeek(endOfMonth);
	let day = startDate;
	let days = [];

	while (dateFns.isBefore(day, endDate) || days.length < 6) {
		let dayRow = [];
		for (let i = 0; i < 7; i++) {
			let isActive = dateFns.isSameMonth(day, startOfMonth);
			let isSelected = dateFns.isSameDay(day, date);
			let hasJournalEntry = datesWithEntries.includes(
				dateFns.format(day, 'YYYY-MM-DD')
			);
			dayRow.push(
				<Day
					setDate={setDate}
					active={isActive}
					selected={isSelected}
					dietLogged={hasJournalEntry}
					key={day} 
					day={day}
				/>
			);
			day = dateFns.addDays(day, 1);
		}
		days.push(
			<div className='days-row' key={day}>{
				dayRow}
			</div>
		);
	}

	return (
		<div className="days-grid"> 
			{days}
		</div>
	);
}

export default DaysContainer;
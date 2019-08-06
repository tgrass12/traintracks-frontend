import React, {useState, useEffect} from 'react';
import dateFns from 'date-fns';
import Header from './Header';
import DaysContainer from './DaysContainer';
import Details from './Details';
import '../../styles/Calendar.scss';

let CalendarContainer = () => {
	let [date, setDate] = useState(new Date());
	let [datesWithEntries, setEntryDates] = useState([]);

	let getJournalEntries = (newDate) => {
		let date = dateFns.format(newDate, 'YYYY-MM-DD');
		let apiUrl = `/api/users/tyler/journal/range?range=month&date=${date}`;
		return fetch(apiUrl).then(res => res.json())
			.then(journalEntries => {
				return journalEntries.filter(j => j.total.calories > 0)
					.map(j => j.date);
		});
	}

	useEffect(() => {
		getJournalEntries(date).then(dates => {
			setEntryDates(dates);
		})
	}, [date]);

	let setSelectedDate = (newDate) => {
		setDate(newDate);
	}


	return (
		<div className="calendar-container">
			<div className="calendar">
				<Header date={date} setDate={setSelectedDate}/>
				<DaysContainer 
					setDate={setSelectedDate} 
					date={date}
					datesWithEntries={datesWithEntries}
				/>
			</div>
			<Details/>
		</div>
	)
}

export default CalendarContainer;
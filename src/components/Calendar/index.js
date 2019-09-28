import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import dateFns from 'date-fns';
import Header from './Header';
import DaysContainer from './DaysContainer';
import Details from './Details';
import '../../styles/Calendar.scss';

let Calendar = () => {
	let user = useSelector(state => state.user.username);
	let [date, setDate] = useState(new Date());
	let [datesWithEntries, setEntryDates] = useState({});

	useEffect(() => {
		if (!user) return;
		let getJournalEntries = (newDate) => {
			let date = dateFns.format(newDate, 'YYYY-MM-DD');
			let apiUrl = `/api/users/${user}/journal/range?range=month&scope=${date}`;
			return fetch(apiUrl).then(res => res.json())
			.then(journalEntries => {
				let entriesWithLogs = {};
				let filteredEntries = journalEntries.filter(j => {
					return j.nutrition !== null || j.workouts.length > 0
				});
				
				for (let entry of filteredEntries) {
					entriesWithLogs[entry.date] = {
						isDietLogged: entry.nutrition != null,
						isWorkoutLogged: entry.workouts.length > 0
					}
				}
				return entriesWithLogs;
			});
		}

		getJournalEntries(date).then(entries => {
			setEntryDates(entries);
		})
	}, [date, user]);

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

export default Calendar;
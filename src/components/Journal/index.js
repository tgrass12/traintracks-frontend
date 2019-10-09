import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import NutritionJournal from '../NutritionJournal';
import Tabs from '../../hocs/Tabs';
import WorkoutLog from '../WorkoutLog';
import {
	fetchJournal
} from '../../store/actions/journal';
import { isValidDateString } from '../../shared/util';
import '../../styles/DailyJournal.scss';

let Journal = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const date = useSelector(state => state.journal.selectedDate);
	const journal = useSelector(state => state.journal[date]);
	const queryStrDate = queryString.parse(location.search).date;
	const dateStr =  isValidDateString(queryStrDate) ? queryStrDate : date;

	useEffect(() => {
		dispatch(fetchJournal(dateStr));
	});

	let journalComponents = [
	{
		'label': 'Nutrition',
		'component': NutritionJournal,
		'props': {
			'date': dateStr,
			'nutrition': journal.nutrition,
		}
	},
	{
		'label': 'Exercise',
		'component': WorkoutLog,
		'props': {
			'workouts': journal.workouts
		}
	}];

	let journalTabs = Tabs(journalComponents);

	return (
		<div className="daily-journal">
			<div className="journal-container">
				{journalTabs}
			</div>
		</div>
	)
}

export default Journal;
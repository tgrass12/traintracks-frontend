import React from 'react';
import NutritionJournal from '../NutritionJournal';
import Tabs from '../../hocs/Tabs';
import WorkoutLog from '../WorkoutLog';
import '../../styles/DailyJournal.scss';

let Journal = () => {
	let journalComponents = [
	{
		'label': 'Nutrition',
		'component': NutritionJournal
	},
	{
		'label': 'Exercise',
		'component': WorkoutLog
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
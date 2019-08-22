import React from 'react';
import JournalHeader from './JournalHeader';
import NutritionJournal from '../NutritionJournal/NutritionJournal';
import WorkoutLog from '../WorkoutLog/WorkoutLog';
import '../../styles/DailyJournal.scss';

let DailyJournal = () => {
	return (
		<div className="daily-journal">
			<div className="journal-container">
				<JournalHeader/>	
				<NutritionJournal/>
			</div>
		</div>
	)
}

export default DailyJournal;
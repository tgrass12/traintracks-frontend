import React from 'react';
import { useSelector } from 'react-redux';
import JournalHeader from '../Journal/JournalHeader';
import LogNewExercise from './LogNewExercise';
import '../../styles/WorkoutLog.scss';

let WorkoutLog = () => {
	let loggedExercises = useSelector(state => {
		let date = state.journal.selectedDate;
		return state.journal[date].workouts.exercise;
	});

	let exercises = loggedExercises.map(e => {
		return (
			<div key={e._id}>
				{e.name}
			</div>
		);
	});

	return (
		<div className="workout-log-container">
			<div className="exercise-logger">
				<JournalHeader/>
				<div className="workout-log">
					{exercises.length > 0 ?
						exercises
						:
						<LogNewExercise />
					}
				</div>
			</div>
		</div>
	)
}

export default WorkoutLog;
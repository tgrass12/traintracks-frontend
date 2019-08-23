import React, { useState } from 'react';
import JournalHeader from '../Journal/JournalHeader';
import LogNewExercise from './LogNewExercise';
import '../../styles/WorkoutLog.scss';

let WorkoutLog = () => {
	let [loggedExercises, setLoggedExercises] = useState([]);

	let exercises = loggedExercises.map(e => {
		return (<div key={e}>{e}</div>);
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
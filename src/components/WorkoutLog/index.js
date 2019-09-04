import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../hocs/Modal';
import JournalHeader from '../Journal/JournalHeader';
import ExerciseLogger from './ExerciseLogger';
import LogNewExercise from './LogNewExercise';
import LoggedExercises from './LoggedExercises';
import '../../styles/WorkoutLog.scss';

let WorkoutLog = () => {
	let loggedExercises = useSelector(state => {
		let date = state.journal.selectedDate;
		return state.journal[date].workouts;
	});

	let [isModalVisible, setIsModalVisible] = useState(false);

	const displayModal = () => {
		setIsModalVisible(true);
	}

	const hideModal = () => {
		setIsModalVisible(false);
	}

	let ExerciseLoggerModal = Modal(
		ExerciseLogger,
		isModalVisible,
		hideModal
	);

	return (
		<div className="workout-log-container">
			<div className="exercise-logger">
				<JournalHeader/>
				<div className="workout-log">
					{loggedExercises.length > 0 ?
						<div>
							<LoggedExercises 
								loggedExercises={loggedExercises}
							/>
							<button 
								className="add-exercise-btn"
								onClick={displayModal}
							> 
								Add Exercise 
							</button>
						</div>
						:
						<LogNewExercise 
							ExerciseLoggerModal={ExerciseLoggerModal}
							displayModal={displayModal}
						/>
					}
				</div>
				{ExerciseLoggerModal}
			</div>
		</div>
	)
}

export default WorkoutLog;
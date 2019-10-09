import React, { useState } from 'react';
import Modal from '../../hocs/Modal';
import JournalHeader from '../Journal/JournalHeader';
import ExerciseLogger from './ExerciseLogger';
import LogNewExercise from './LogNewExercise';
import LoggedExercises from './LoggedExercises';
import '../../styles/WorkoutLog.scss';

let WorkoutLog = ({workouts=[]}) => {
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
					{workouts.length > 0 ?
						<div>
							<LoggedExercises 
								loggedExercises={workouts}
							/>
							<button 
								className="add-exercise-btn"
								onClick={displayModal}
							> 
								Add Exercise 
							</button>
							{ExerciseLoggerModal}
						</div>
						:
						<LogNewExercise 
							ExerciseLoggerModal={ExerciseLoggerModal}
							displayModal={displayModal}
						/>
					}
				</div>
			</div>
		</div>
	)
}

export default WorkoutLog;
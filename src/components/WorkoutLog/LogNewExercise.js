import React, { useState } from 'react';
import Modal from '../../hocs/Modal';
import ExerciseLogger from './ExerciseLogger';

let LogNewExercise = () => {
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
		<div className="new-exercise-hero">
			<h3>No Exercises Yet</h3>
			<button 
				id="exercise-cta"
				onClick={displayModal}
			>
				Log One Now
			</button>
			{ExerciseLoggerModal}
		</div>
	)
}

export default LogNewExercise;
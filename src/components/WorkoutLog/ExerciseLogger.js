import React from 'react';
import ExerciseLoggerForm from './ExerciseLoggerForm';
let ExerciseLogger = ({hideModal}) => {

	let logExercise = (exercise) => {
		console.log(exercise);

		if (hideModal) hideModal();
	}

	return (
		<div className="exercise-logger-container">
			<h2> Log an exercise </h2>
			<ExerciseLoggerForm logExercise={logExercise} />
		</div>
	);
}

export default ExerciseLogger;
import React from 'react';

let LogNewExercise = ({ExerciseLoggerModal, displayModal}) => {

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
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise } from '../../store/actions/journal';
import ExerciseLoggerForm from './ExerciseLoggerForm';

let ExerciseLogger = ({hideModal}) => {
	let dispatch = useDispatch();
	let date = useSelector(state => state.journal.selectedDate);
	
	let logExercise = (exercise) => {
		dispatch(addExercise(date, exercise));
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
import React, { useState } from 'react';

let ExerciseLoggerForm = ({logExercise}) => {
	let [exerciseName, setExerciseName] = useState('');
	let [weight, setWeight] = useState(0);
	let [sets, setSets] = useState(1);
	let [reps, setReps] = useState(1);

	let handleChange = (e) => {
		switch(e.target.id) {
			case 'logger-exercise-name':
				setExerciseName(e.target.value);
				return;
			case 'logger-weight':
				setWeight(e.target.value);
				return;
			case 'logger-sets':
				setSets(e.target.value);
				return;
			case 'logger-reps':
				setReps(e.target.value);
				return;
			default:
				return;
		}
	}

	let handleClick = (e) => {
		e.preventDefault();
		let exerciseToLog = {
			exerciseName,
			weight,
			sets,
			reps
		};

		logExercise(exerciseToLog);
	}

	return (
			<form className="exercise-logger-form">
				<label htmlFor="logger-exercise-name">Exercise: </label>
				<input 
					id="logger-exercise-name" 
					value={exerciseName}
					onChange={handleChange} 
				/>
				<label htmlFor="logger-weight">Weight: </label>
				<input 
					id="logger-weight" 
					type="number"
					value={weight}
					onChange={handleChange} 
				/>
				<input 
					id="logger-sets" 
					type="number"
					value={sets}
					onChange={handleChange} 
				/>
				<label 
					id="logger-sets-label" 
					htmlFor="logger-sets"
				> 
					Set(s) of 
				</label>
				<input 
					id="logger-reps" 
					type="number" 
					value={reps}
					onChange={handleChange} 
				/>
				<label 
					id="logger-reps-label" 
					htmlFor="logger-reps"
				> 
					Reps 
				</label>
				<div>
					<button 
						id="log-exercise-btn"
						onClick={handleClick}
					> 
						+ Add Exercise
					</button>
				</div>
			</form>
	)
}

export default ExerciseLoggerForm;
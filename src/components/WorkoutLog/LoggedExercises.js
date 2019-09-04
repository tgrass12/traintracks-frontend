import React from 'react';
import Exercise from './Exercise';

let LoggedExercises = ({loggedExercises=[]}) => {

	let exercises = loggedExercises.map(e => {
		return (
			<Exercise 
				key={e._id}
				name={e.name}
				weight={e.weight}
				sets={e.sets}
				reps={e.reps}
			/>
		);
	});

	return (
		<div>
			<div id="logged-exercises">
				{exercises}
			</div>	
		</div>
	)
}

export default LoggedExercises;
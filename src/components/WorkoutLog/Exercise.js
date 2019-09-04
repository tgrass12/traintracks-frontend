import React from 'react';

let Exercise = ({name, weight, sets, reps}) => {
	return (
		<div className="logged-exercise">
			<span className="logged-exercise-name"> {name} </span>
			<div className="logged-exercise-activity">
				<span> {weight} </span>
				<span> {sets} </span>
				<span> {reps} </span>
			</div> 
		</div>
	)
}

export default Exercise;
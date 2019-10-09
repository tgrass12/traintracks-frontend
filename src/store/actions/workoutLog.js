import {
	ADD_EXERCISE
} from '../actionTypes';

export const updateExercise = (date, exercise) => {
	return {
		type: ADD_EXERCISE,
		date,
		exercise
	}
}

export const addExercise = (date, exercise) => {
	return async (dispatch, getState) => {
		try {
			const state = getState();
			const user = state.user.data.username;
			fetch(`/api/users/${user}/journal/${date}/workouts`, {
	  			method: 'POST',
	  			body: JSON.stringify(exercise),
	  			headers: {
	    			'Content-Type': 'application/json'
	    		}
	    	}).then(res => res.json())
	    	.then(exercise => {
				dispatch(updateExercise(date, exercise));
	    	});

		} catch(err) {
			let error = new Error(`Error logging exercise: ${err}`);
			throw error;			
		}
	}
}
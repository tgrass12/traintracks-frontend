import { SET_SELECTED_DATE } from '../actionTypes';

let initialState = {
	'selectedDate': new Date()
}

const journal = (state=initialState, action) => {
	switch(action.type) {
		case SET_SELECTED_DATE:
			return {...state, 'selectedDate': action.selectedDate}
		default:
			return state;
	}
} 

export default journal;
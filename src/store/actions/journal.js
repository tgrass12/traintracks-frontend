import { SET_SELECTED_DATE } from '../actionTypes';

export const setSelectedDate = function(selectedDate) {
	return {
		type: SET_SELECTED_DATE,
		selectedDate
	};
}
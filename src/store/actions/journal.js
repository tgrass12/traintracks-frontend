import { 
	SET_SELECTED_DATE,
	FETCH_JOURNAL,
	RECEIVE_JOURNAL_SUCCESS,
	RECEIVE_JOURNAL_EMPTY
} from '../actionTypes';

import {
	fetchUser
} from './user';

export const setSelectedDate = function(selectedDate) {
	return {
		type: SET_SELECTED_DATE,
		selectedDate
	};
}

export const receiveJournalSuccess = function(date, entry) {
	return {
		type: RECEIVE_JOURNAL_SUCCESS,
		date,
		entry
	}
}

export const receiveJournalEmpty = function(date, meals, targets) {
	return {
		type: RECEIVE_JOURNAL_EMPTY,
		date,
		meals,
		targets
	}
}

const shouldFetchJournal = function(state, date) {
	if (state.journal[date] 
		&& (state.journal[date].nutrition.meals.length > 0 ||
			state.journal[date].workouts.length > 0))
	{
		return false;
	}
	return true;
}

export const beginFetchJournal = function(date) {
	return {
		type: FETCH_JOURNAL,
		date
	}
}

export const fetchJournal = function(date) {
	return (dispatch, getState) => {
		let state = getState();
		if (!shouldFetchJournal(state, date)) {
			return Promise.resolve().then(() => {
				dispatch(setSelectedDate(date));
			});
		}

		dispatch(beginFetchJournal(date));

		const username = state.user.username;
		let apiUrl = `/api/users/${username}/journal/${date}`;

		return fetch(apiUrl).then(async res =>  {
			if (res.status === 204)
			{
				if (state.user.meals.length === 0) {
					await dispatch(fetchUser(username));
					state = getState();
				}
				await dispatch(receiveJournalEmpty(date, state.user.meals, state.user.targets.diet));
				return Promise.resolve();
			}
			return res.json();
		})
			.then(entry => {
				if (entry) {
					dispatch(receiveJournalSuccess(date, entry));
				}
				dispatch(setSelectedDate(date));
			});
	}
}

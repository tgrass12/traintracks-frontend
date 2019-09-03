import { 
	SET_SELECTED_DATE,
	FETCH_JOURNAL,
	RECEIVE_JOURNAL_SUCCESS,
	RECEIVE_JOURNAL_EMPTY
} from '../actionTypes';

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

export const receiveJournalEmpty = function(date) {
	return {
		type: RECEIVE_JOURNAL_EMPTY,
		date
	}
}

const shouldFetchJournal = function(state, date) {
	if (state.journal[date] 
		&& (state.journal[date].nutrition ||
			state.journal[date].workouts))
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
		const state = getState();
		if (!shouldFetchJournal(state, date)) {
			return Promise.resolve().then(() => {
				dispatch(setSelectedDate(date));
			});
		}

		dispatch(beginFetchJournal(date));

		const user = state.user.username;
		let apiUrl = `/api/users/${user}/journal/${date}`;

		return fetch(apiUrl).then(res =>  {
			if (res.status === 204)
			{
				dispatch(receiveJournalEmpty(date));
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

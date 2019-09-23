import * as actions from '../journal';
import {
	FETCH_JOURNAL,
	RECEIVE_JOURNAL_SUCCESS,
	RECEIVE_JOURNAL_EMPTY,
	SET_SELECTED_DATE,
} from '../../actionTypes';

const date = '2019-07-02';

describe('journal actions', () => {
	it('should create an action to set the date', () => {
		const selectedDate = '2019-07-02';
		const expectedAction = {
			type: SET_SELECTED_DATE,
			selectedDate
		}
		expect(actions.setSelectedDate(selectedDate)).toEqual(expectedAction);
	});

	it('should create an action to fetch a journal', () => {
		const expectedAction = {
			type: FETCH_JOURNAL,
			date
		};
		expect(actions.beginFetchJournal(date)).toEqual(expectedAction);
	});

	it('should create an action to receive the journal', () => {
		const entry = {
			nutrition: {
				targets: {
					cals: 2000,
					macros: {
						carbs: {
							total: 400
						},
						protein: 150,
						fats: {
							total: 45
						}
					}
				},
			meals: [],
				water: 32,
			},
			workouts: []
		};
		
		const expectedAction = {
			type: RECEIVE_JOURNAL_SUCCESS,
			date,
			entry
		};

		expect(actions.receiveJournalSuccess(date, entry))
			.toEqual(expectedAction);
	});

	it('should create an action to receive an empty journal', () => {
		const meals = [
			'Breakfast',
			'Lunch',
			'Dinner'
		];
		const targets = {
			'diet': {}
		}

		const expectedAction = {
			type: RECEIVE_JOURNAL_EMPTY,
			date,
			meals,
			targets
		};

		expect(actions.receiveJournalEmpty(date, meals, targets)).toEqual(expectedAction);
	});
});
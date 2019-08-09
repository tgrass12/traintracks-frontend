import { combineReducers } from 'redux';
import max from './max';
import nutritionJournal from './nutritionJournal';
import journal from './journal';

const rootReducer = combineReducers({
	journal,
	nutritionJournal,
	max,
});

export default rootReducer;
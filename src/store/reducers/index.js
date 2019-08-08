import { combineReducers } from 'redux';
import max from './max';
import nutritionJournal from './nutritionJournal';

const rootReducer = combineReducers({
	nutritionJournal,
	max,
});

export default rootReducer;
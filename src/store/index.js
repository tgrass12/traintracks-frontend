import { createStore } from 'redux';
import rootReducer from './reducers';

export function initStore() {
	const store = createStore(rootReducer);
	return store;
}
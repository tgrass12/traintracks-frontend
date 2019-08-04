import React from 'react';
import { Provider } from 'react-redux';
import { initStore } from '../store';
import '../styles/App.scss';
import RepMaxContainer from './MaxCalculator/RepMaxContainer';
import CalendarContainer from './Calendar/CalendarContainer';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CalendarContainer/>
      </div>
    </Provider>   
  );
}

export default App;

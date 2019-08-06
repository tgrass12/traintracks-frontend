import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from '../store';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
    	<Router>
	      <div className="App">
	      	<Header/>
	      	<Main />
	      </div>
      	</Router>
    </Provider>   
  );
}

export default App;

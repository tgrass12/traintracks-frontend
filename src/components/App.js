import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import {
  refreshSession
} from '../store/actions/user';

const cookies = new Cookies();

function App() {
  const dispatch = useDispatch();

  if (cookies.get('connect.sid')) {
    dispatch(refreshSession());
  }

  return (
  	<Router>
      <div className="App">
      	<Header />
      	<Main />
      </div>
  	</Router>
  );
}

export default App;

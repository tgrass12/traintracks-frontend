import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from '../store';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import { Auth0Provider } from '../Auth/auth0-wrapper';
import config from '../shared/authConfig.json';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      > 
      	<Router>
  	      <div className="App">
  	      	<Header/>
  	      	<Main />
  	      </div>
      	</Router>
      </Auth0Provider>
    </Provider>   
  );
}

export default App;

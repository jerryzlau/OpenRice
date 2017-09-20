import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <a href='/' >
      <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1505869835/openrice_logo_qusua1.png" />
      </a>
      <h2><GreetingContainer/></h2>
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

    {/* <ProtectedRoute path='/' component={GreetingContainer} /> */}
  </div>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;

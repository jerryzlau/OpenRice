import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
// import ModalDEMO from './session_form/modal_demo';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>OpenRice</h1>
      <h2><GreetingContainer/></h2>
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;

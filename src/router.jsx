import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './utils/history';
import Home from './pages/Home';
import Test from './pages/test/Test';

const RouterConfig = () => (
  <Router history={history}>
    <Route path="/home" component={Home} />
    <Route path="/test" component={Test} />
  </Router>
);
export default RouterConfig;

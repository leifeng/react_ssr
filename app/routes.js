import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import RouterContainer from './RouterContainer.js';
import Indexs from './routes/Index.js'
import User from './routes/User.js';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={RouterContainer}>
      <IndexRoute component={Indexs} />
      <Route path="/user" component={User} />
    </Route>
  </Router>
)


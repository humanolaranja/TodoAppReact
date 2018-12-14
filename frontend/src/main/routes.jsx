import React from 'react';
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom';

import Todo from '../todo/todo';
import About from '../about/about';

export default (props) => (
  <HashRouter>
    <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from='*' to='/todos' />
    </Switch>
  </HashRouter>
)

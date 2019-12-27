import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import Example from '../pages/List/example';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" component={List} />
      <Route path="/example" component={Example} />
    </Switch>
  );
}

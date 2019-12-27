import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import Example from '../pages/List/example';
import Teacher from '../pages/Teacher';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/teacher" component={Teacher} />
      <Route path="/example" component={Example} />
    </Switch>
  );
}

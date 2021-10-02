import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import CardA from '@src/pages/CardA';

const App = (): ReactElement => (
  <Switch>
    <Route exact path="/" component={CardA} />
  </Switch>
);

export default App;

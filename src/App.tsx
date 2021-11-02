import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexPage from './pages';

const App = (): ReactElement => (
  <Switch>
    <Route path="/" component={IndexPage} />
  </Switch>
);

export default App;

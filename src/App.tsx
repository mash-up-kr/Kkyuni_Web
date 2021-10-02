import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import Toggle from '@src/components/Toggle';

const App = (): ReactElement => (
  <Switch>
    <Route exact path="/" component={Toggle} />
  </Switch>
);

export default App;

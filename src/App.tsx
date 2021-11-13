import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexPage from './pages';
import PreviewPage from './pages/preview';

const App = (): ReactElement => (
  <Switch>
    <Route exact path="/preview" component={PreviewPage} />
    <Route path="/" component={IndexPage} />
  </Switch>
);

export default App;

import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexPage from './pages';
import PreviewPage from './pages/preview';
import MockComplete from './pages/MockComplete';

const App = (): ReactElement => (
  <Switch>
    <Route exact path="/preview" component={PreviewPage} />
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/mock-complete" component={MockComplete} />
  </Switch>
);

export default App;

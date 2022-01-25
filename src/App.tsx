import './index.scss';
import './app.styles.scss';

import { Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    );
  }
}

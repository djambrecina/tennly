import { Layout } from 'antd';
import paths from 'config/paths';
import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import {
  Route,
  Switch
} from 'react-router-dom';

import Leagues from './modules/leagues/Leagues';
import Navigation from './components/Navigation';

const App: React.FunctionComponent = () => (
  <Layout>
    <Layout.Header>
      <Navigation />
    </Layout.Header>
    <LoadingBar />
    <Layout>
      <Switch>
        <Route path={paths.leagues} component={Leagues} />
      </Switch>
    </Layout>
  </Layout>
);

export default App;

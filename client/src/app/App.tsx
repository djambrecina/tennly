import { Layout } from 'antd';
import paths from 'config/paths';
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import CreateLeague from './modules/leagues/CreateLeague';
import CreatePlayer from './modules/players/CreatePlayer';
import Leagues from './modules/leagues/Leagues';
import Navigation from './components/navigation/Navigation';
import Players from './modules/players/Players';
import styles from './App.module.css';

const App: React.FunctionComponent = () => (
  <Layout>
    <Layout.Header className={styles.header}>
      <Navigation />
    </Layout.Header>
    <Layout.Content>
      <Switch>
        <Route exact path={paths.leagues} component={Leagues} />
        <Route exact path={paths.createLeague} component={CreateLeague} />
        <Route exact path={paths.players} component={Players} />
        <Route exact path={paths.createPlayer} component={CreatePlayer} />
      </Switch>
    </Layout.Content>
  </Layout>
);

export default App;

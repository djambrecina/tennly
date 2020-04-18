import { Layout } from 'antd';
import paths from 'config/paths';
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Leagues from './modules/leagues/Leagues';
import Navigation from './components/Navigation';
import Players from './modules/players/Players';
import CreatePlayer from './modules/players/CreatePlayer';
import styles from './App.module.css';

const App: React.FunctionComponent = () => (
  <Layout>
    <Layout.Header className={styles.header}>
      <Navigation />
    </Layout.Header>
    <Layout.Content className={styles.content}>
      <Switch>
        <Route exact path={paths.leagues} component={Leagues} />
        <Route exact path={paths.players} component={Players} />
        <Route exact path={paths.createPlayer} component={CreatePlayer} />
      </Switch>
    </Layout.Content>
  </Layout>
);

export default App;

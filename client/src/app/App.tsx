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
import styles from './App.module.css';

const App: React.FunctionComponent = () => (
  <Layout>
    <Layout.Header className={styles.header}>
      <Navigation />
    </Layout.Header>
    <Layout.Content className={styles.content}>
      <Switch>
        <Route path={paths.leagues} component={Leagues} />
        <Route path={paths.players} component={Players} />
      </Switch>
    </Layout.Content>
  </Layout>
);

export default App;

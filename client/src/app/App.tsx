import {
  Layout,
  Menu
} from 'antd';
import React from 'react';

const App: React.FunctionComponent = () => (
  <Layout>
    <Layout.Header>
      <Menu mode="horizontal">
        <Menu.Item key="leagues">Leagues</Menu.Item>
        <Menu.Item key="players">Players</Menu.Item>
      </Menu>
    </Layout.Header>
  </Layout>
);

export default App;

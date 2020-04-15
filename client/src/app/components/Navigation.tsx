import { Menu } from 'antd';
import paths from 'config/paths';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FunctionComponent = () => (
  <Menu mode="horizontal">
    <Menu.Item key="leagues">
      <Link to={paths.leagues}>
        Leagues
      </Link>
    </Menu.Item>
    <Menu.Item key="players">Players</Menu.Item>
  </Menu>
);

export default Navigation;

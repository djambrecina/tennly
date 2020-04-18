import { Menu } from 'antd';
import paths from 'config/paths';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FunctionComponent = () => (
  <Menu mode="horizontal">
    <Menu.Item key="home">
      <Link to={paths.home}>
        Tennly
      </Link>
    </Menu.Item>
    <Menu.Item key="leagues">
      <Link to={paths.leagues}>
        Leagues
      </Link>
    </Menu.Item>
    <Menu.Item key="players">
      <Link to={paths.players}>
        Players
      </Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;

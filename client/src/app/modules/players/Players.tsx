import { Typography } from 'antd';
import { fetchPlayers } from 'core/store/players/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffectOnce } from 'react-use';

import PlayersTable from './components/PlayersTable';

const Players: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(fetchPlayers.request());
  });

  return (
    <>
      <Typography.Title level={3}>
        Players
      </Typography.Title>
      <PlayersTable />
    </>
  );
};

export default Players;

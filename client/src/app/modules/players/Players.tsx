import {
  Button,
  Row,
  Typography
} from 'antd';
import paths from 'config/paths';
import { fetchPlayers } from 'core/store/players/actions';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  generatePath,
  RouteComponentProps
} from 'react-router';
import { useEffectOnce } from 'react-use';

import PlayersTable from './components/PlayersTable';

const Players: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(fetchPlayers.request());
  });

  const goToCreatePlayer = useCallback(() => {
    history.push(generatePath(paths.createPlayer))
  }, [history]);

  return (
    <>
      <Row justify="space-between">
        <Typography.Title level={3}>
          Players
        </Typography.Title>
        <Button onClick={goToCreatePlayer}>
          Create Player
        </Button>
      </Row>
      <PlayersTable />
    </>
  );
};

export default Players;

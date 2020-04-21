import {
  Button,
  PageHeader
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
    history.push(generatePath(paths.createPlayer));
  }, [history]);

  return (
    <PageHeader
      title="Players"
      extra={(
        <Button onClick={goToCreatePlayer}>
          Create Player
        </Button>
      )}
    >
      <PlayersTable />
    </PageHeader>
  );
};

export default Players;

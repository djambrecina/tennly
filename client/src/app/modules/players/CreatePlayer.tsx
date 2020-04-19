import { Typography } from 'antd';
import paths from 'config/paths';
import { createPlayer } from 'core/store/players/actions';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  generatePath,
  RouteComponentProps
} from 'react-router';

import CreatePlayerForm from './components/CreatePlayerForm';
import { CreatePlayerFormValues } from './types';

const CreatePlayer: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const onCancel = useCallback(() => {
    history.push(generatePath(paths.players));
  }, [history]);

  const onSubmit = useCallback((values: CreatePlayerFormValues) => {
    dispatch(createPlayer.request(values));
  }, [dispatch]);

  return (
    <>
      <Typography.Title level={3}>
        Create player
      </Typography.Title>
      <CreatePlayerForm
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default CreatePlayer;

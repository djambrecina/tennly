import { Typography } from 'antd';
import paths from 'config/paths';
import React, { useCallback } from 'react';
import {
  generatePath,
  RouteComponentProps
} from 'react-router';

import CreatePlayerForm from './components/CreatePlayerForm';
import { CreatePlayerFormValues } from './types';

const CreatePlayer: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const onCancel = useCallback(() => {
    history.push(generatePath(paths.players));
  }, [history]);

  const onSubmit = useCallback((values: CreatePlayerFormValues) => {
    console.log("SUBMIT");
    console.log(values);
  }, []);

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

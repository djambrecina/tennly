import { Typography } from 'antd';
import React from 'react';

import CreatePlayerForm from './components/CreatePlayerForm';

const CreatePlayer: React.FunctionComponent = () => (
  <>
    <Typography.Title level={3}>
      Create player
    </Typography.Title>
    <CreatePlayerForm />
  </>
);

export default CreatePlayer;

import {
  Button,
  PageHeader
} from 'antd';
import paths from 'config/paths';
import React, { useCallback } from 'react';
import {
  generatePath,
  RouteComponentProps
} from 'react-router';

const Leagues: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const goToCreateLeague = useCallback(() => {
    history.push(generatePath(paths.createLeague));
  }, [history]);

  return (
    <PageHeader
      title="Leagues"
      extra={(
        <Button onClick={goToCreateLeague}>
          Create League
        </Button>
      )}
    />
  );
};

export default Leagues;

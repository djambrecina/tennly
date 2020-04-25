import {
  Button,
  PageHeader
} from 'antd';
import paths from 'config/paths';
import { fetchLeagues } from 'core/store/leagues/actions';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  generatePath,
  RouteComponentProps
} from 'react-router';
import { useEffectOnce } from 'react-use';

import LeaguesTable from './components/LeaguesTable';

const Leagues: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(fetchLeagues.request());
  });

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
    >
      <LeaguesTable />
    </PageHeader>
  );
};

export default Leagues;

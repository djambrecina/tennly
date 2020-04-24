import { PageHeader } from 'antd';
import paths from 'config/paths';
import { createLeague } from 'core/store/leagues/actions';
import { fetchPlayers } from 'core/store/players/actions';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  generatePath,
  RouteComponentProps
} from 'react-router';
import { useEffectOnce } from 'react-use';

import CreateLeagueForm from './components/CreateLeagueForm';
import { CreateLeagueFormValues } from './types';

const CreateLeague: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  useEffectOnce(() => {
    dispatch(fetchPlayers.request());
  });

  const onCancel = useCallback(() => {
    history.push(generatePath(paths.leagues));
  }, [history]);

  const onSubmit = useCallback((values: CreateLeagueFormValues) => {
    dispatch(createLeague.request(values));
  }, [dispatch]);

  return (
    <PageHeader title="Create league">
      <CreateLeagueForm
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </PageHeader>
  );
};

export default CreateLeague;

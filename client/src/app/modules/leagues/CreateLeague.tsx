import { PageHeader } from 'antd';
import paths from 'config/paths';
import { createLeague } from 'core/store/leagues/actions';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  generatePath,
  RouteComponentProps
} from 'react-router';

import CreateLeagueForm from './components/CreateLeagueForm';
import { CreateLeagueFormValues } from './types';

const CreateLeague: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const onCancel = useCallback(() => {
    history.push(generatePath(paths.leagues));
  }, [history]);

  const onSubmit = useCallback((values: CreateLeagueFormValues) => {
    dispatch(createLeague.request({ ...values, players: [] })); /* TODO players */
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

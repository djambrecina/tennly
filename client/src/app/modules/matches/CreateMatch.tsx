import { PageHeader } from 'antd';
import paths from 'config/paths';
import { fetchCreateMatchInfo } from 'core/store/matches/actions';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  generatePath,
  RouteComponentProps,
  useParams
} from 'react-router';

import CreateMatchForm from './components/CreateMatchForm';
import { CreateMatchFormValues } from './types';

const CreateMatch: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const { leagueId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (leagueId) {
      dispatch(fetchCreateMatchInfo.request(leagueId));
    }
  }, [dispatch, leagueId]);

  const onCancel = useCallback(() => {
    if (leagueId) {
      history.push(generatePath(paths.leagueDetails, { leagueId }));
    }
  }, [history, leagueId]);

  const onSubmit = useCallback((values: CreateMatchFormValues) => {
    console.log(values);
    /* TODO */
  }, []);

  return (
    <PageHeader title="Add match result">
      <CreateMatchForm
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </PageHeader>
  );
};

export default CreateMatch;

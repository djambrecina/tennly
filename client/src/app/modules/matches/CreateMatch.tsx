import { PageHeader } from 'antd';
import { fetchCreateMatchInfo } from 'core/store/matches/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const CreateMatch: React.FunctionComponent = () => {
  const { leagueId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (leagueId) {
      dispatch(fetchCreateMatchInfo.request(leagueId));
    }
  }, [dispatch, leagueId]);

  return (
    <PageHeader
      title="Add match result"
    />
  );
};

export default CreateMatch;

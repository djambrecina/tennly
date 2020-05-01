import { PageHeader } from 'antd';
import { fetchLeagueDetails } from 'core/store/leagues/actions';
import { getLeagueDetails } from 'core/store/leagues/selectors';
import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useParams } from 'react-router';

const LeagueDetails: React.FunctionComponent = () => {
  const { leagueId } = useParams();
  const dispatch = useDispatch();
  const league = useSelector(getLeagueDetails);

  useEffect(() => {
    if (leagueId) {
      dispatch(fetchLeagueDetails.request(leagueId));
    }
  }, [dispatch, leagueId]);

  return (
    <PageHeader title={league.name} />
  );
};

export default LeagueDetails;

import {
  Button,
  PageHeader
} from 'antd';
import paths from 'config/paths';
import { fetchLeagueDetails } from 'core/store/leagues/actions';
import { getLeagueDetails } from 'core/store/leagues/selectors';
import React, { useCallback, useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  generatePath,
  RouteComponentProps,
  useParams
} from 'react-router';

const LeagueDetails: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const { leagueId } = useParams();
  const dispatch = useDispatch();
  const league = useSelector(getLeagueDetails);

  useEffect(() => {
    if (leagueId) {
      dispatch(fetchLeagueDetails.request(leagueId));
    }
  }, [dispatch, leagueId]);

  const goToCreateMatch = useCallback(() => {
    if (leagueId) {
      history.push(generatePath(paths.createMatch, { leagueId }));
    }
  }, [history, leagueId]);

  return (
    <PageHeader
      title={league.name}
      extra={(
        <Button onClick={goToCreateMatch}>
          Add Match Result
        </Button>
      )}
    />
  );
};

export default LeagueDetails;

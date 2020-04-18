import { fetchPlayers } from 'core/store/players/actions';
import { getPlayers } from 'core/store/players/selectors';
import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useEffectOnce } from 'react-use';

const Players: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(fetchPlayers.request());
  });

  const players = useSelector(getPlayers);
  console.log(players);

  return (
    <div>
      Players
    </div>
  );
};

export default Players;

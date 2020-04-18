import { Player } from 'core/models/player';

import api from '../api';

export const getPlayers = async (): Promise<Player[]> => {
  const { data } = await api.get<Player[]>("/player/all");
  return data;
};

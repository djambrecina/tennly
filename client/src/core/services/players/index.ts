import { AllPlayersViewModel } from '../../../../../shared/viewModels/player';
import api from '../api';

export const getPlayers = async (): Promise<AllPlayersViewModel[]> => {
  const { data } = await api.get<AllPlayersViewModel[]>("/player/all");
  return data;
};

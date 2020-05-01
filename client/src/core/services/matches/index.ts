import { CreateMatchViewModel } from '../../../../../shared/types/match';
import api from '../api';

export const getCreateMatchInfo = async (leagueId: string): Promise<CreateMatchViewModel> => {
  const { data } = await api.get<CreateMatchViewModel>(`/match/createInfo?leagueId=${leagueId}`);
  return data;
};

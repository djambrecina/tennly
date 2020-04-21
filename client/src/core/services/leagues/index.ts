import {
  AllLeaguesViewModel,
  CreateLeagueRequestBody
} from '../../../../../shared/types/league';
import api from '../api';

export const getLeagues = async (): Promise<AllLeaguesViewModel[]> => {
  const { data } = await api.get<AllLeaguesViewModel[]>("/league/all");
  return data;
};

export const postLeague = async (body: CreateLeagueRequestBody): Promise<{}> => (
  api.post("/league", body)
);

import {
  AllLeaguesViewModel,
  CreateLeagueRequestBody,
  LeagueDetailsViewModel
} from 'tennly-shared';

import api from '../api';

export const getLeagues = async (): Promise<AllLeaguesViewModel[]> => {
  const { data } = await api.get<AllLeaguesViewModel[]>("/league/all");
  return data;
};

export const getDetails = async (leagueId: string): Promise<LeagueDetailsViewModel> => {
  const { data } = await api.get<LeagueDetailsViewModel>(`/league/${leagueId}`);
  return data;
};

export const postLeague = async (body: CreateLeagueRequestBody): Promise<{}> => (
  api.post("/league", body)
);

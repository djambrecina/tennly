import {
  CreateMatchRequestBody,
  CreateMatchViewModel
} from 'tennly-shared';

import api from '../api';

export const getCreateMatchInfo = async (leagueId: string): Promise<CreateMatchViewModel> => {
  const { data } = await api.get<CreateMatchViewModel>(`/match/createInfo?leagueId=${leagueId}`);
  return data;
};

export const postMatch = async (body: CreateMatchRequestBody): Promise<{}> => (
  api.post("/match", body)
);

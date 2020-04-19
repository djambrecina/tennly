import {
  AllPlayersViewModel,
  CreatePlayerRequestBody
} from '../../../../../shared/types/player';
import api from '../api';

export const getPlayers = async (): Promise<AllPlayersViewModel[]> => {
  const { data } = await api.get<AllPlayersViewModel[]>("/player/all");
  return data;
};

export const postPlayer = async (body: CreatePlayerRequestBody): Promise<{}> => (
  api.post("/player", body)
);

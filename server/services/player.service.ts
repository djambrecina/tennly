import Player from '../models/player.model';
import { CreatePlayerRequestBody } from '../../shared/types/player';

export const create = async (player: CreatePlayerRequestBody): Promise<void> => {
  await Player.create(player);
};

export const getAll = async (): Promise<Player[]> => {
  const players = await Player.findAll({
    attributes: ["id", "firstName", "lastName"]
  });

  return players;
};

export default {
  create,
  getAll
};

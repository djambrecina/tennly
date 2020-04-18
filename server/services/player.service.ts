import Player from "../models/player.model";

export const getAll = async (): Promise<Player[]> => {
  const players = await Player.findAll({
    attributes: ["id", "firstName", "lastName"]
  });

  return players;
};

export default {
  getAll
};

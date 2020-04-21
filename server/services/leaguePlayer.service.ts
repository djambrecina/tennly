import { Transaction } from 'sequelize';

import LeaguePlayer from '../models/leaguePlayer.model';

export const createAll = async (
  leagueId: number,
  playerIds: number[],
  transaction: Transaction
): Promise<LeaguePlayer> => {
  const records = playerIds.map((playerId) => ({
    leagueId,
    playerId
  }));
  return LeaguePlayer.bulkCreate(records, { transaction });
};

export default {
  createAll
};

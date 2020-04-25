import {
  Sequelize,
  Transaction
} from 'sequelize';

import League from '../models/league.model';
import {
  AllLeaguesViewModel,
  CreateLeagueRequestBody
} from '../../shared/types/league';

export const create = async (
  league: CreateLeagueRequestBody,
  transaction: Transaction
): Promise<League> => (
  League.create(league, { transaction })
);

export const getAll = async (): Promise<AllLeaguesViewModel[]> => (
  League.findAll({
    attributes: [
      "id",
      "createdAt",
      "name",
      [Sequelize.literal(`(
        SELECT COUNT(*)
        FROM "LeaguePlayers"
        WHERE "LeaguePlayers"."leagueId" = "League"."id"
      )`), "numberOfPlayers"]
    ]
  })
);

export default {
  create,
  getAll
};

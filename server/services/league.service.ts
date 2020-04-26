import {
  Sequelize,
  Transaction
} from 'sequelize';

import League from '../models/league.model';
import Player from '../models/player.model';
import {
  AllLeaguesViewModel,
  CreateLeagueRequestBody,
  LeagueDetailsViewModel
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

export const getDetails = async (leagueId: string): Promise<LeagueDetailsViewModel> => (
  League.findByPk(leagueId, {
    attributes: ["name"],
    include: [{
      model: Player,
      attributes: ["id", "firstName", "lastName"],
      through: {
        attributes: []
      }
    }]
  })
);

export default {
  create,
  getAll,
  getDetails
};

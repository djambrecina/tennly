import {
  Sequelize,
  Transaction
} from 'sequelize';
import {
  AllLeaguesViewModel,
  CreateLeagueRequestBody,
  LeagueDetailsViewModel
} from 'tennly-shared';

import League from '../models/league.model';
import Match from '../models/match.model';
import Player from '../models/player.model';

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

export const getDetails = async (leagueId: string): Promise<League> => (
  League.findByPk(leagueId, {
    attributes: ["name"],
    include: [{
      model: Player,
      attributes: ["id", "firstName", "lastName"],
      through: {
        attributes: []
      }
    }, {
      model: Match,
      attributes: [
        "winnerId",
        "loserId",
        "set1WinnerGames",
        "set1LoserGames",
        "set2WinnerGames",
        "set2LoserGames",
        "set3WinnerGames",
        "set3LoserGames"
      ]
    }]
  })
);

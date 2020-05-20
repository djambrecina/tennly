import {
  Op,
  Transaction
} from 'sequelize';
import {
  CreateMatchRequestBody,
  CreateMatchViewModel,
  MatchValidator
} from 'tennly-shared';

import Match from '../models/match.model';
import League from '../models/league.model';
import Player from '../models/player.model';

export const create = async (match: CreateMatchRequestBody): Promise<Match> => {
  const {
    leagueId,
    winnerId: player1Id,
    loserId: player2Id,
    set1WinnerGames,
    set1LoserGames,
    set2WinnerGames,
    set2LoserGames,
    set3WinnerGames,
    set3LoserGames
  } = match;

  if (await hasMatchWithLeagueAndPlayers(leagueId, player1Id, player2Id)) {
    throw new Error("Match already exist");
  }
  if (!MatchValidator.isValidResult(
    set1WinnerGames,
    set1LoserGames,
    set2WinnerGames,
    set2LoserGames,
    set3WinnerGames,
    set3LoserGames
  )) {
    throw new Error("Invalid result");
  }

  return await Match.create(match)
};

export const getCreateMatchInfo = async (leagueId: string): Promise<CreateMatchViewModel> => {
  const league = await League.findByPk(leagueId, {
    attributes: ["name"],
    include: [{
      model: Player,
      attributes: ["id", "firstName", "lastName"],
      through: {
        attributes: []
      }
    }]
  });

  const createMatchVM: CreateMatchViewModel = {
    players: league.players,
    availableMatches: []
  };

  return createMatchVM;
};

export const hasMatchWithLeagueAndPlayers = async (
  leagueId: number,
  player1Id: number,
  player2Id: number
): Promise<boolean> => (
  await Match.count({
    where: {
      leagueId,
      [Op.or]: [
        { winnerId: player1Id, loserId: player2Id },
        { winnerId: player2Id, loserId: player1Id },
      ]
    }
  }) > 0
);

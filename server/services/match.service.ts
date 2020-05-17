import { CreateMatchViewModel } from 'tennly-shared';

import League from '../models/league.model';
import Player from '../models/player.model';

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

export default {
  getCreateMatchInfo
};

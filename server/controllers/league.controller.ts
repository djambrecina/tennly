import {
  Request,
  Response
} from 'express';
import { Transaction } from 'sequelize';

import { sequelize } from '../config/database';
import { CreateLeagueRequestBody } from '../../shared/types/league';
import LeaguePlayerService from '../services/leaguePlayer.service';
import LeagueService from '../services/league.service';

export const create = async (
  req: Request<null, null, CreateLeagueRequestBody, null>,
  res: Response<null>
): Promise<void> => {
  try {
    const { body } = req;

    await sequelize.transaction(async (t: Transaction) => {
      const league = await LeagueService.create(body, t);
      await LeaguePlayerService.createAll(league.id, body.players, t);
    });

    res.json(null);
  }
  catch (err) {
    res.status(400).json(err.message);
  }
};

export default {
  create
};

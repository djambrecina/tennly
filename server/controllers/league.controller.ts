import {
  Request,
  Response
} from 'express';
import { Transaction } from 'sequelize';

import { sequelize } from '../config/database';
import {
  AllLeaguesViewModel,
  CreateLeagueRequestBody
} from '../../shared/types/league';
import League from '../models/league.model';
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

export const getAll = async (
  _: Request,
  res: Response<AllLeaguesViewModel[]>
): Promise<void> => {
  try {
    const leagues: League[] = await LeagueService.getAll();
    const vms = leagues.map((l) => ({
      id: l.id,
      name: l.name,
      numberOfPlayers: l.players.length,
      createdAt: l.createdAt
    }));

    res.json(vms);
  }
  catch (err) {
    res.status(400).json(err.message);
  }
};

export default {
  create,
  getAll
};

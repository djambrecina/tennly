import {
  Request,
  Response
} from 'express';
import * as log from 'loglevel';
import { Transaction } from 'sequelize';
import {
  AllLeaguesViewModel,
  CreateLeagueRequestBody,
  LeagueDetailsViewModel
} from 'tennly-shared';

import { sequelize } from '../config/database';
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
    log.error(err);
    res.status(400).json(err.message);
  }
};

export const getAll = async (
  _: Request,
  res: Response<AllLeaguesViewModel[]>
): Promise<void> => {
  try {
    const leagues = await LeagueService.getAll();

    res.json(leagues);
  }
  catch (err) {
    log.error(err);
    res.status(400).json(err.message);
  }
};

export const getDetails = async (
  req: Request,
  res: Response<LeagueDetailsViewModel>
): Promise<void> => {
  try {
    const { leagueId } = req.params;
    const league = await LeagueService.getDetails(leagueId);

    res.json(league);
  }
  catch (err) {
    log.error(err);
    res.status(400).json(err.message);
  }
};

export default {
  create,
  getAll,
  getDetails
};

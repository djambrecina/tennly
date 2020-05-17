import {
  Request,
  Response
} from 'express';
import * as log from 'loglevel';
import {
  AllPlayersViewModel,
  CreatePlayerRequestBody
} from 'tennly-shared';

import PlayerService from '../services/player.service';

export const create = async (
  req: Request<null, null, CreatePlayerRequestBody, null>,
  res: Response<null>
): Promise<void> => {
  try {
    const { body } = req;

    await PlayerService.create(body);

    res.json(null);
  }
  catch (err) {
    log.error(err);
    res.status(400).json(err.message);
  }
};

export const getAll = async (
  _: Request,
  res: Response<AllPlayersViewModel[]>
): Promise<void> => {
  try {
    const players: AllPlayersViewModel[] = await PlayerService.getAll();

    res.json(players);
  }
  catch (err) {
    log.error(err);
    res.status(400).json(err.message);
  }
};

export default {
  create,
  getAll
};

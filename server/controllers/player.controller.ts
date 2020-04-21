import {
  Request,
  Response
} from 'express';

import {
  AllPlayersViewModel,
  CreatePlayerRequestBody
} from '../../shared/types/player';
import PlayerService from '../services/player.service';

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body }: { body: CreatePlayerRequestBody } = req;

    await PlayerService.create(body);

    res.json(null);
  }
  catch (err) {
    res.status(400).json(err.message);
  }
};

export const getAll = async (_: Request, res: Response): Promise<void> => {
  try {
    const players: AllPlayersViewModel[] = await PlayerService.getAll();

    res.json(players);
  }
  catch (err) {
    res.status(400).json(err.message);
  }
};

export default {
  create,
  getAll
};

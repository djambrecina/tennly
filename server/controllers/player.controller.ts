import {
  Request,
  Response
} from "express";

import PlayerService from "../services/player.service";

export const getAll = async (_: Request, res: Response): Promise<void> => {
  const players = await PlayerService.getAll();

  res.json(players);
};

export default {
  getAll
};
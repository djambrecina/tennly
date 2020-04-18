import {
  Request,
  Response
} from "express";

import { AllPlayersViewModel } from '../../shared/viewModels/player';
import PlayerService from "../services/player.service";

export const getAll = async (_: Request, res: Response): Promise<void> => {
  const players: AllPlayersViewModel[] = await PlayerService.getAll();

  res.json(players);
};

export default {
  getAll
};

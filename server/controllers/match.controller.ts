import {
  Request,
  Response
} from 'express';
import * as log from 'loglevel';

import { CreateMatchViewModel } from '../../shared/types/match';
import MatchService from '../services/match.service';

export const getCreateMatchInfo = async (
  req: Request<null, null, null, { leagueId: string }>,
  res: Response<CreateMatchViewModel>
): Promise<void> => {
  try {
    const { leagueId } = req.query;

    const matchInfo = await MatchService.getCreateMatchInfo(leagueId);

    res.json(matchInfo);
  }
  catch (err) {
    log.error(err);
    res.status(400).json(err.message);
  }
};

export default {
  getCreateMatchInfo
};

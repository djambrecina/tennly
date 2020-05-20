import {
  Request,
  Response
} from 'express';
import * as log from 'loglevel';
import {
  CreateMatchRequestBody,
  CreateMatchViewModel
} from 'tennly-shared';

import * as MatchService from '../services/match.service';

export const create = async (
  req: Request<null, null, CreateMatchRequestBody, null>,
  res: Response<null>
): Promise<void> => {
  try {
    const { body } = req;

    await MatchService.create(body);

    res.json(null);
  }
  catch (err) {
    log.error(err);
    res.status(400).json(err.message);
  }
};

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

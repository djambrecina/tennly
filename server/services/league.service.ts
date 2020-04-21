import { Transaction } from 'sequelize';

import League from '../models/league.model';
import { CreateLeagueRequestBody } from '../../shared/types/league';

export const create = async (
  league: CreateLeagueRequestBody,
  transaction: Transaction
): Promise<League> => (
  League.create(league, { transaction })
);

export default {
  create
};

import { Router } from "express";

import * as LeagueController from "../controllers/league.controller";

const apiUrl = "/league";

const LeagueRoutes = (router: Router) => {
  router.get(`${apiUrl}/all`, LeagueController.getAll);
  router.get(`${apiUrl}/:leagueId`, LeagueController.getDetails);

  router.post(`${apiUrl}`, LeagueController.create);
};

export default LeagueRoutes;

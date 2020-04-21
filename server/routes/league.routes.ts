import { Router } from "express";

import * as LeagueController from "../controllers/league.controller";

const apiUrl = "/league";

const LeagueRoutes = (router: Router) => {
  router.post(`${apiUrl}`, LeagueController.create);
};

export default LeagueRoutes;

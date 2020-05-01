import { Router } from "express";

import * as MatchController from "../controllers/match.controller";

const apiUrl = "/match";

const MatchRoutes = (router: Router) => {
  router.get(`${apiUrl}/createInfo`, MatchController.getCreateMatchInfo);
};

export default MatchRoutes;

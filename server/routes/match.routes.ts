import { Router } from "express";

import * as MatchController from "../controllers/match.controller";

const apiUrl = "/match";

const MatchRoutes = (router: Router) => {
  router.get(`${apiUrl}/createInfo`, MatchController.getCreateMatchInfo);

  router.post(apiUrl, MatchController.create);
};

export default MatchRoutes;

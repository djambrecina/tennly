import { Router } from "express";

import * as PlayerController from "../controllers/player.controller";

const apiUrl = "/player";

const PlayerRoutes = (router: Router) => {
  router.get(`${apiUrl}/all`, PlayerController.getAll);

  router.post(`${apiUrl}`, PlayerController.create);
};

export default PlayerRoutes;

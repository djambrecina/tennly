import { Router } from "express";

import LeagueRoutes from "./league.routes";
import PlayerRoutes from "./player.routes";

const router: Router = Router();

router.get("/test", async (_, res) => res.status(200).send({ message: "It's alive!" }));

LeagueRoutes(router);
PlayerRoutes(router);

export default router;

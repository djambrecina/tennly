import { Router } from "express";

import LeagueRoutes from "./league.routes";
import MatchRoutes from "./match.routes";
import PlayerRoutes from "./player.routes";

const router: Router = Router();

router.get("/test", async (_, res) => res.status(200).send({ message: "It's alive!" }));

LeagueRoutes(router);
MatchRoutes(router);
PlayerRoutes(router);

export default router;

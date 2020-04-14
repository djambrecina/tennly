import { Router } from "express";

import PlayerRoutes from "./player.routes";

const router: Router = Router();

router.get("/test", async (_, res) => res.status(200).send({ message: "It's alive!" }));

PlayerRoutes(router);

export default router;

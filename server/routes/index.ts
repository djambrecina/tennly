import { Router } from "express";

const router = Router();

router.get("/test", async (_, res) => res.status(200).send({ message: "It's alive!" }));

export default router;

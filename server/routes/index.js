const { Router } = require("express");

const router = new Router();

router.get("/test", async (req, res) => res.status(200).send({ message: "It's alive!" }));

module.exports = router;

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

import env from "./config/environment";
import { initDatabase } from "./config/database";
import routes from "./routes";

const app = express();

app.use(bodyParser.json());

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(env.PORT, async () => {
  // eslint-disable-next-line no-console
  console.log(`app running on port ${env.PORT}`);

  await initDatabase();
});

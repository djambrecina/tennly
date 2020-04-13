import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import { Sequelize } from "sequelize";

import env from "./config/environment";
import routes from "./routes";

const app = express();
const sequelize = new Sequelize(env.DB_CONNECTION_STRING);

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

  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log("Connection has been established successfully.");
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
});

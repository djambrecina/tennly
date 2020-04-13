import * as path from "path";
import { Sequelize } from "sequelize-typescript";

import env from "./environment";

let sequelize = null;

export const initDatabase = async (): Promise<Sequelize> => {
  sequelize = new Sequelize(env.DB_CONNECTION_STRING);

  try {
    await sequelize.authenticate();
    sequelize.addModels([path.resolve(__dirname, "/models/**/*.model.ts")]);

    // eslint-disable-next-line no-console
    console.log("Connection has been established successfully.");
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }

  return sequelize;
};

export default {
  initDatabase
};

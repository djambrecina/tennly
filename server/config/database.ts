import { Sequelize } from "sequelize-typescript";

import env from "./environment";
import League from "../models/league.model";
import LeaguePlayer from "../models/leaguePlayer.model";
import Player from "../models/player.model";

// eslint-disable-next-line import/no-mutable-exports
export let sequelize = null;

export const initDatabase = async (): Promise<Sequelize> => {
  sequelize = new Sequelize(env.DB_CONNECTION_STRING);

  try {
    await sequelize.authenticate();
    sequelize.addModels([
      League,
      LeaguePlayer,
      Player
    ]);
    await sequelize.sync();

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

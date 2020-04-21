import {
  Column,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";

import League from "./league.model";
import Player from "./player.model";

@Table
class LeaguePlayer extends Model<LeaguePlayer> {
  @Column
  @ForeignKey(() => League)
  leagueId: number;

  @Column
  @ForeignKey(() => Player)
  playerId: number;
}

export default LeaguePlayer;

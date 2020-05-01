import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";

import League from "./league.model";
import Player from "./player.model";

@Table
class LeaguePlayer extends Model<LeaguePlayer> {
  @AllowNull(false)
  @ForeignKey(() => League)
  @Column(DataType.INTEGER)
  leagueId: number;

  @AllowNull(false)
  @ForeignKey(() => Player)
  @Column(DataType.INTEGER)
  playerId: number;
}

export default LeaguePlayer;

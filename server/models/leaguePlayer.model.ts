import {
  AllowNull,
  Column,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";

import League from "./league.model";
import Player from "./player.model";

@Table
class LeaguePlayer extends Model<LeaguePlayer> {
  @AllowNull(false)
  @Column
  @ForeignKey(() => League)
  leagueId: number;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Player)
  playerId: number;
}

export default LeaguePlayer;

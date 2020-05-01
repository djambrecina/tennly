import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from "sequelize-typescript";

import League from "./league.model";
import Player from "./player.model";

@Table
class Match extends Model<Match> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(true)
  @Column
  @ForeignKey(() => League)
  leagueId: number;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Player)
  winnerId: number;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Player)
  loserId: number;
}

export default Match;

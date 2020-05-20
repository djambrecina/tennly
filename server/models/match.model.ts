import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Max,
  Min,
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

  @ForeignKey(() => League)
  @Column(DataType.INTEGER)
  leagueId: number;

  @BelongsTo(() => League)
  league: League;

  @AllowNull(false)
  @ForeignKey(() => Player)
  @Column(DataType.INTEGER)
  winnerId: number;

  @BelongsTo(() => Player)
  winner: Player;

  @AllowNull(false)
  @ForeignKey(() => Player)
  @Column(DataType.INTEGER)
  loserId: number;

  @BelongsTo(() => Player)
  loser: Player;

  @AllowNull(false)
  @Min(0)
  @Max(7)
  @Column(DataType.INTEGER)
  set1WinnerGames: number;

  @AllowNull(false)
  @Min(0)
  @Max(7)
  @Column(DataType.INTEGER)
  set1LoserGames: number;

  @AllowNull(false)
  @Min(0)
  @Max(7)
  @Column(DataType.INTEGER)
  set2WinnerGames: number;

  @AllowNull(false)
  @Min(0)
  @Max(7)
  @Column(DataType.INTEGER)
  set2LoserGames: number;

  @Min(0)
  @Max(7)
  @Column(DataType.INTEGER)
  set3WinnerGames: number;

  @Min(0)
  @Max(7)
  @Column(DataType.INTEGER)
  set3LoserGames: number;
}

export default Match;

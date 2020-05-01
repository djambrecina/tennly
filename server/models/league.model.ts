import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Length,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table
} from "sequelize-typescript";

import LeaguePlayer from "./leaguePlayer.model";
import Match from "./match.model";
import Player from "./player.model";

@Table
class League extends Model<League> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Length({ max: 100 })
  @AllowNull(false)
  @Column(DataType.TEXT)
  name: string;

  @BelongsToMany(() => Player, () => LeaguePlayer)
  players: Player[];

  @HasMany(() => Match)
  matches: Match[];
}

export default League;

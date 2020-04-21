import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Length,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table
} from "sequelize-typescript";

import LeaguePlayer from "./leaguePlayer.model";
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
}

export default League;

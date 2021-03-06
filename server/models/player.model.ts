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

import League from "./league.model";
import LeaguePlayer from "./leaguePlayer.model";

@Table
class Player extends Model<Player> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Length({ max: 50 })
  @AllowNull(false)
  @Column(DataType.TEXT)
  firstName: string;

  @Length({ max: 50 })
  @AllowNull(false)
  @Column(DataType.TEXT)
  lastName: string;

  @BelongsToMany(() => League, () => LeaguePlayer)
  leagues: League[];
}

export default Player;

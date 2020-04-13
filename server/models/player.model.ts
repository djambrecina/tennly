import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table
} from "sequelize-typescript";

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

  @AllowNull(false)
  @Column(DataType.TEXT)
  firstName: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  lastName: string;
}

export default Player;

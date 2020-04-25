export interface AllLeaguesViewModel {
  id: number;
  name: string;
  numberOfPlayers: number;
  createdAt: Date;
}

export interface CreateLeagueRequestBody {
  name: string;
  players: number[];
}

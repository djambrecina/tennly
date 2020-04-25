export interface AllLeaguesViewModel {
  id: number;
  name: string;
  numberOfPlayers: string;
  createdAt: Date;
}

export interface CreateLeagueRequestBody {
  name: string;
  players: number[];
}

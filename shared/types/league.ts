export interface AllLeaguesViewModel {
  id: number;
  name: string;
  numberOfPlayers: number;
  createdAt: string;
}

export interface CreateLeagueRequestBody {
  name: string;
  players: number[];
}

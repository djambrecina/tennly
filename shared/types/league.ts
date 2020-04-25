export interface AllLeaguesViewModel {
  id: number;
  name: string;
  numberOfPlayers: string;
  createdAt: string;
}

export interface CreateLeagueRequestBody {
  name: string;
  players: number[];
}

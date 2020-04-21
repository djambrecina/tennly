export interface AllLeaguesViewModel {
  id: number;
  name: string;
}

export interface CreateLeagueRequestBody {
  name: string;
  players: number[];
}

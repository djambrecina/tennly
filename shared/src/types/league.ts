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

interface LeagueDetailsPlayerViewModel {
  id: number;
  firstName: string;
  lastName: string;
}

export interface LeagueDetailsViewModel {
  name: string;
  players: LeagueDetailsPlayerViewModel[];
}

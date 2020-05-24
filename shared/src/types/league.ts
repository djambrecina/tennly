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

export interface LeagueDetailsStandingsViewModel {
  position: number;
  points: number;
  player: LeagueDetailsPlayerViewModel;
  won: number;
  lost: number;
  setsFor: number;
  setsAgainst: number;
  gamesFor: number;
  gamesAgainst: number;
}

export interface LeagueDetailsViewModel {
  name: string;
  standings: LeagueDetailsStandingsViewModel[];
}

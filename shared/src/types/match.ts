export interface CreateMatchPlayerViewModel {
  id: number;
  firstName: string;
  lastName: string;
}

export type CreateMatchAvailableMatchViewModel = [number, number];

export interface CreateMatchRequestBody {
  leagueId: number;
  winnerId: number;
  loserId: number;
  set1WinnerGames: number;
  set1LoserGames: number;
  set2WinnerGames: number;
  set2LoserGames: number;
  set3WinnerGames?: number;
  set3LoserGames?: number;
}

export interface CreateMatchViewModel {
  players: CreateMatchPlayerViewModel[];
  availableMatches: CreateMatchAvailableMatchViewModel[];
}

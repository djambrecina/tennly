export interface CreateMatchPlayerViewModel {
  id: number;
  firstName: string;
  lastName: string;
}

export type CreateMatchAvailableMatchViewModel = [number, number];

export interface CreateMatchViewModel {
  players: CreateMatchPlayerViewModel[];
  availableMatches: CreateMatchAvailableMatchViewModel[];
}

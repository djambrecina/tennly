export interface CreateMatchFormValues {
  winnerId: number;
  loserId: number;
  set1WinnerGames: number;
  set1LoserGames: number;
  set2WinnerGames: number;
  set2LoserGames: number;
  set3WinnerGames?: number;
  set3LoserGames?: number;
}

export const FormValues = ({} as unknown) as CreateMatchFormValues;

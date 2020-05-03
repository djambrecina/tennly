export const isValidSetResult = (
  player1Games: number,
  player2Games: number
): boolean => {
  const winnerGames = player1Games > player2Games ? player1Games : player2Games;
  const loserGames = player1Games > player2Games ? player2Games : player1Games;

  return winnerGames > loserGames
    && (
      (winnerGames === 6 && loserGames >= 0 && loserGames <= 4)
      || (winnerGames === 7 && loserGames >= 5 && loserGames <= 6)
    );
};

export const isValidResult = (
  set1WinnerGames: number,
  set1LoserGames: number,
  set2WinnerGames: number,
  set2LoserGames: number,
  set3WinnerGames: number | null,
  set3LoserGames: number | null
): boolean => {
  let winnerSets = 0;
  let loserSets = 0;

  winnerSets += set1WinnerGames > set1LoserGames ? 1 : 0;
  loserSets += set1WinnerGames > set1LoserGames ? 0 : 1;

  winnerSets += set2WinnerGames > set2LoserGames ? 1 : 0;
  loserSets += set2WinnerGames > set2LoserGames ? 0 : 1;

  if (winnerSets === 2 && loserSets === 0) {
    return set3WinnerGames === null
      && set3LoserGames === null
      && isValidSetResult(set1WinnerGames, set1LoserGames)
      && isValidSetResult(set2WinnerGames, set2LoserGames);
  }

  winnerSets += set3WinnerGames > set3LoserGames ? 1 : 0;
  loserSets += set3WinnerGames > set3LoserGames ? 0 : 1;

  if (winnerSets === 2 && loserSets === 1) {
    return isValidSetResult(set1WinnerGames, set1LoserGames)
      && isValidSetResult(set2WinnerGames, set2LoserGames)
      && isValidSetResult(set3WinnerGames, set3LoserGames);
  }

  return false;
};

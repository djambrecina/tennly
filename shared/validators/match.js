"use strict";
exports.__esModule = true;
exports.isValidResult = exports.isValidSetResult = void 0;
exports.isValidSetResult = function (player1Games, player2Games) {
    var winnerGames = player1Games > player2Games ? player1Games : player2Games;
    var loserGames = player1Games > player2Games ? player2Games : player1Games;
    return winnerGames > loserGames
        && ((winnerGames === 6 && loserGames >= 0 && loserGames <= 4)
            || (winnerGames === 7 && loserGames >= 5 && loserGames <= 6));
};
exports.isValidResult = function (set1WinnerGames, set1LoserGames, set2WinnerGames, set2LoserGames, set3WinnerGames, set3LoserGames) {
    var winnerSets = 0;
    var loserSets = 0;
    winnerSets += set1WinnerGames > set1LoserGames ? 1 : 0;
    loserSets += set1WinnerGames > set1LoserGames ? 0 : 1;
    winnerSets += set2WinnerGames > set2LoserGames ? 1 : 0;
    loserSets += set2WinnerGames > set2LoserGames ? 0 : 1;
    if (winnerSets === 2 && loserSets === 0) {
        return set3WinnerGames === undefined
            && set3LoserGames === undefined
            && exports.isValidSetResult(set1WinnerGames, set1LoserGames)
            && exports.isValidSetResult(set2WinnerGames, set2LoserGames);
    }
    if (typeof set3WinnerGames === "number" && typeof set3LoserGames === "number") {
        winnerSets += set3WinnerGames > set3LoserGames ? 1 : 0;
        loserSets += set3WinnerGames > set3LoserGames ? 0 : 1;
        if (winnerSets === 2 && loserSets === 1) {
            return exports.isValidSetResult(set1WinnerGames, set1LoserGames)
                && exports.isValidSetResult(set2WinnerGames, set2LoserGames)
                && exports.isValidSetResult(set3WinnerGames, set3LoserGames);
        }
    }
    return false;
};

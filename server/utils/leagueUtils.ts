import { LeagueDetailsStandingsViewModel } from 'tennly-shared';

import Match from '../models/match.model';
import Player from '../models/player.model';

type LeagueMatch = Pick<Match,
  "winnerId"
  | "loserId"
  | "set1WinnerGames"
  | "set1LoserGames"
  | "set2WinnerGames"
  | "set2LoserGames"
  | "set3WinnerGames"
  | "set3LoserGames"
>;

type LeaguePlayer = Pick<Player,
  "id"
  | "firstName"
  | "lastName"
>;

export const getStandings = (
  matches: LeagueMatch[],
  players: LeaguePlayer[]
): LeagueDetailsStandingsViewModel[] => {
  const standings: LeagueDetailsStandingsViewModel[] = players.map(player => ({
    position: 0,
    points: 0,
    player: {
      id: player.id,
      firstName: player.firstName,
      lastName: player.lastName
    },
    won: 0,
    lost: 0,
    setsFor: 0,
    setsAgainst: 0,
    gamesFor: 0,
    gamesAgainst: 0
  }));

  for (const match of matches) {
    const {
      set1WinnerGames,
      set1LoserGames,
      set2WinnerGames,
      set2LoserGames,
      set3WinnerGames,
      set3LoserGames
    } = match;

    const winnerSets = 2;
    const loserSets = typeof set3LoserGames === "number" ? 1 : 0;
    const winnerGames = set1WinnerGames + set2WinnerGames + (set3WinnerGames || 0);
    const loserGames = set1LoserGames + set2LoserGames + (set3LoserGames || 0);

    const winnerData = standings.find(s => s.player.id === match.winnerId);
    winnerData.points += 3;
    winnerData.won += 1;
    winnerData.setsFor += winnerSets;
    winnerData.setsAgainst += loserSets;
    winnerData.gamesFor += winnerGames;
    winnerData.gamesAgainst += loserGames;

    const loserData = standings.find(s => s.player.id === match.loserId);
    loserData.points += 1;
    loserData.lost += 1;
    loserData.setsFor += loserSets;
    loserData.setsAgainst += winnerSets;
    loserData.gamesFor += loserGames;
    loserData.gamesAgainst += winnerGames;
  }

  standings.sort((s1, s2) => {
    if (s1.points > s2.points) {
      return -1;
    }
    else if (s2.points > s1.points) {
      return 1;
    }

    const match = matches.find(m =>
      (m.winnerId === s1.player.id && m.loserId === s2.player.id)
      || (m.winnerId === s2.player.id && m.loserId === s1.player.id)
    );
    if (match && match.winnerId === s1.player.id) {
      return -1;
    }
    else if (match && match.winnerId === s1.player.id) {
      return 1;
    }

    if ((s1.setsFor - s1.setsAgainst) > (s2.setsFor - s2.setsAgainst)) {
      return -1;
    }
    else if ((s2.setsFor - s2.setsAgainst) > (s1.setsFor - s1.setsAgainst)) {
      return 1;
    }

    const player1FullName = `${s1.player.lastName} ${s1.player.firstName}`;
    const player2FullName = `${s2.player.lastName} ${s2.player.firstName}`;
    return player1FullName.localeCompare(player2FullName);
  });

  for (let i = 1; i <= standings.length; i++) {
    standings[i - 1].position = i;
  }

  return standings;
};

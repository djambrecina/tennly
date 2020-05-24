import { Table } from 'antd';
import { getLeagueDetails } from 'core/store/leagues/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

const LeagueDetailsTable: React.FunctionComponent = () => {
  const leagueDetails = useSelector(getLeagueDetails);
  const dataSource = leagueDetails.standings.map(s => ({ key: s.player.id, ...s }));

  return (
    <Table
      columns={[{
        title: "Position",
        dataIndex: "position"
      }, {
        title: "Player",
        dataIndex: "player",
        render: (player): string => `${player.lastName} ${player.firstName}`
      }, {
        title: "Won",
        dataIndex: "won"
      }, {
        title: "Lost",
        dataIndex: "lost"
      }, {
        title: "Sets for",
        dataIndex: "setsFor"
      }, {
        title: "Sets agains",
        dataIndex: "setsAgainst"
      }, {
        title: "Games for",
        dataIndex: "gamesFor"
      }, {
        title: "Games against",
        dataIndex: "gamesAgainst"
      }, {
        title: "Points",
        dataIndex: "points"
      }]}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default LeagueDetailsTable;

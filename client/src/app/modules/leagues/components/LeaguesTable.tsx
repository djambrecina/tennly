import {
  Button,
  Table
} from 'antd';
import paths from 'config/paths';
import moment from 'moment';
import {
  getLeagues,
  getFetchLeaguesInfo
} from 'core/store/leagues/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { generatePath } from 'react-router';

const LeaguesTable: React.FunctionComponent = () => {
  const leagues = useSelector(getLeagues);
  const fetchInfo = useSelector(getFetchLeaguesInfo);
  const dataSource = leagues.map(l => ({ key: l.id, ...l }));

  return (
    <Table
      columns={[{
        title: "Name",
        dataIndex: "name",
        sorter: (a, b): number => a.name.localeCompare(b.name),
        showSorterTooltip: false
      }, {
        title: "Number of players",
        dataIndex: "numberOfPlayers"
      }, {
        title: "Created at",
        dataIndex: "createdAt",
        defaultSortOrder: "descend",
        render: (createdAt): string => moment(createdAt).format('DD/MM/YYYY HH:mm'),
        sorter: (a, b): number => (
          moment(b.createdAt).milliseconds() - moment(a.createdAt).milliseconds()
        ),
        showSorterTooltip: false
      }, {
        dataIndex: "id",
        render: (id): JSX.Element => (
          <Button
            type="link"
            href={generatePath(paths.leagueDetails, { leagueId: id })}
          >
            Details
          </Button>
        )
      }]}
      dataSource={dataSource}
      loading={fetchInfo.loading}
    />
  );
};

export default LeaguesTable;

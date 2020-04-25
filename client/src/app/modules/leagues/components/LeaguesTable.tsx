import { Table } from 'antd';
import moment from 'moment';
import {
  getLeagues,
  getFetchLeaguesInfo
} from 'core/store/leagues/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

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
        sorter: (a, b): number => (
          moment(b.createdAt).milliseconds() - moment(a.createdAt).milliseconds()
        ),
        showSorterTooltip: false
      }]}
      dataSource={dataSource}
      loading={fetchInfo.loading}
    />
  );
};

export default LeaguesTable;

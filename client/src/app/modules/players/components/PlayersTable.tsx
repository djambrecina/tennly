import { Table } from 'antd';
import {
  getPlayers,
  getFetchPlayersInfo
} from 'core/store/players/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

const PlayersTable: React.FunctionComponent = () => {
  const players = useSelector(getPlayers);
  const fetchInfo = useSelector(getFetchPlayersInfo);
  const dataSource = players.map(p => ({ key: p.id, ...p }));

  return (
    <Table
      columns={[{
        title: "Last name",
        dataIndex: "lastName",
        defaultSortOrder: "ascend",
        sorter: (a, b): number => a.lastName.localeCompare(b.lastName),
        showSorterTooltip: false
      }, {
        title: "First name",
        dataIndex: "firstName",
        sorter: (a, b): number => a.firstName.localeCompare(b.firstName),
        showSorterTooltip: false
      }]}
      dataSource={dataSource}
      loading={fetchInfo.loading}
    />
  );
};

export default PlayersTable;

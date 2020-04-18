import { Table } from 'antd';
import { getPlayers } from 'core/store/players/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

const PlayersTable: React.FunctionComponent = () => {
  const players = useSelector(getPlayers);
  const dataSource = players.map(p => ({ key: p.id, ...p }));

  return (
    <Table
      columns={[{
        title: "First name",
        dataIndex: "firstName"
      }, {
        title: "Last name",
        dataIndex: "lastName"
      }]}
      dataSource={dataSource}
    />
  );
};

export default PlayersTable;

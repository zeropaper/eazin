import React from 'react';
// import { Helmet } from 'react-helmet-async';

// import Table from '../../../../../../packages/core/src/ui/components/Table';
import { Table } from 'eazin-core/ui';

const GroupsView = ({
  api: { get },
}) => (
  <Table
    columns={[
      {
        title: 'Name',
        field: 'name',
      },
    ]}
    data={() => get('/api/groups')}
  />
);

export default GroupsView;

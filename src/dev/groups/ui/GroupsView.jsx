import React from 'react';
// import { Helmet } from 'react-helmet-async';

// import Table from '../../../../../../packages/core/ui/components/Table';
import { Table } from 'eazin-core/ui';

// eslint-disable-next-line react/prop-types
const GroupsView = ({ api: { get } }) => (
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

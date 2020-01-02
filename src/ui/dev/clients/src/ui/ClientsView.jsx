import { stringify as toQuerystring } from 'querystring';
import React from 'react';

import { queryAPI, Table, TimeAgo } from 'eazin-core/ui';

class ClientsView extends React.Component {
  state = {
    hiddenColumns: ['updatedAt'],
    // eslint-disable-next-line
    data: [],
  };

  get columns() {
    const { hiddenColumns } = this.state;
    return [
      { title: 'Name', field: 'name' },
      { title: 'Redirect URI', field: 'redirectURI' },
      {
        editable: 'never',
        title: 'Created',
        filtering: false,
        field: 'createdAt',
        render: (row) => <TimeAgo date={(row && row.createdAt)} />,
      },
      {
        editable: 'never',
        title: 'Updated',
        filtering: false,
        field: 'updatedAt',
        render: (row) => <TimeAgo date={(row && row.updatedAt)} />,
      },
    ].filter(({ field }) => !hiddenColumns.includes(field));
  }

  handleHideColumn = (field) => this.setState((prev) => ({
    hiddenColumns: [
      ...prev.hiddenColumns,
      field,
    ],
  }));

  handleShowColumn = (field) => this.setState((prev) => ({
    hiddenColumns: prev.hiddenColumns.filter((name) => (name !== field)),
  }));

  query = async (query) => {
    const url = `/api/clients?${toQuerystring({
      limit: query.pageSize,
      offset: query.pageSize * query.page,
      orderDirection: query.orderDirection,
      orderBy: query.orderBy,
      search: query.search,
      filters: JSON.stringify((query.filters || []).map((filter) => ({
        ...filter,
        column: filter.column.field,
      }))),
    })}`;

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.api.get(url);
  };

  handleRowAdd = (newData) => queryAPI('/api/clients', {
    method: 'POST',
    body: JSON.stringify(newData),
  });

  handleRowUpdate = ({
    id,
    name,
    redirectURI,
  // eslint-disable-next-line react/destructuring-assignment
  }) => this.props.api.patch(`/api/clients/${id}`, {
    body: { name, redirectURI },
  });

  // eslint-disable-next-line react/destructuring-assignment
  handleRowDelete = ({ id }) => this.props.api.delete(`/api/clients/${id}`);

  renderdetailPanel = (rowData, ...rest) => (
    <div>{console.info('details', rowData, ...rest)}</div>
  );

  render() {
    return (
      <Table
        title="API Clients"
        columns={this.columns}
        data={this.query}
        editable={{
          onRowAdd: this.handleRowAdd,
          onRowUpdate: this.handleRowUpdate,
          onRowDelete: this.handleRowDelete,
        }}
        options={{
          search: false,
          fAddiltering: true,
          sorting: true,
          pageSize: 10,
          pageSizeOptions: [10, 20, 50, 100],
        }}
        detailPanel={this.renderdetailPanel}
      />
    );
  }
}

export default ClientsView;

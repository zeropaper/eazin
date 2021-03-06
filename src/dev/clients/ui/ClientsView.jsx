/* eslint-disable react/prop-types */
import { stringify as toQuerystring } from 'querystring';
import React from 'react';

import { queryAPI, Table, TimeAgo } from 'eazin-core/ui';
import { withStyles } from '@material-ui/core';

const ClientTokens = React.lazy(() => import(/* webpackChunkName: "clientTokens" */'./ClientsView.Tokens'));

const styles = () => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'none',
      color: 'inherit',
      backgroundColor: 'transparent',
    },
    '& > div > div:nth-child(2)': {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    '& th': {
      backgroundColor: 'transparent',
    },
    '& tfoot td': {
      border: 0,
    },
  },
});

class ClientsView extends React.Component {
  state = {
    hiddenColumns: [
      // 'updatedAt'
    ],
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
    const { api: { get } } = this.props;
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

    return get(url);
  };

  queryTokens = (clientId) => {
    const { api: { get } } = this.props;
    return get(`/api/clients/${clientId}/tokens`);
  };

  handleRowAdd = (newData) => queryAPI('/api/clients', {
    method: 'POST',
    body: JSON.stringify(newData),
  });

  handleRowUpdate = ({
    id,
    name,
    redirectURI,
  // eslint-disable-next-line
  }) => this.props.api.patch(`/api/clients/${id}`, {
    body: { name, redirectURI },
  });

  // eslint-disable-next-line
  handleRowDelete = ({ id }) => this.props.api.delete(`/api/clients/${id}`);

  deleteToken = async ({ id } = {}) => {
    const { api: { delete: del } } = this.props;
    return del(`/api/tokens/${id}`);
  };

  renderdetailPanel = ({ tableData, ...client }) => (
    <React.Suspense fallback="loading">
      <ClientTokens
        client={client}
        query={this.queryTokens}
        listTokens={this.queryTokens}
        onDeleteToken={this.deleteToken}
      />
    </React.Suspense>
  );

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
      </div>
    );
  }
}

export default withStyles(styles)(ClientsView);

import { stringify as toQuerystring } from 'querystring';
import React from 'react';
import { connect } from 'react-redux';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';
import queryAPI from '../../core/util/queryAPI';
import Table from '../../components/Table';
import TimeAgo from '../../components/TimeAgo';

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

  get queryHeaders() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // eslint-disable-next-line react/destructuring-assignment
      Authorization: `Bearer ${this.props.userToken}`,
    };
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

    return queryAPI(url, {
      headers: this.queryHeaders,
    });
  };

  handleRowAdd = (newData) => queryAPI('/api/clients', {
    method: 'POST',
    headers: this.queryHeaders,
    body: JSON.stringify(newData),
  });

  handleRowUpdate = ({
    id,
    name,
    redirectURI,
  }) => queryAPI(`/api/clients/${id}`, {
    method: 'PATCH',
    headers: this.queryHeaders,
    body: JSON.stringify({ name, redirectURI }),
  });

  handleRowDelete = ({ id }) => queryAPI(`/api/clients/${id}`, {
    method: 'DELETE',
    headers: this.queryHeaders,
  });

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

ClientsView.propTypes = {
  ...ViewPropTypes,
  // clients: PropTypes.objectOf(PropTypes.object).isRequired,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  // clients,
  settings: { userToken } = {},
}) => ({
  // clients,
  userToken,
});

export default connect(mapStateToProps)(ClientsView);

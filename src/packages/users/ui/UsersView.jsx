import { stringify as toQuerystring } from 'querystring';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { queryAPI, Table, TimeAgo } from 'eazin-core/ui';

class UsersView extends React.Component {
  query = async (query) => {
    const { userToken } = this.props;

    const url = `/api/users?${toQuerystring({
      limit: query.pageSize,
      offset: query.pageSize * query.page,
      orderDirection: query.orderDirection,
      orderBy: query.orderBy ? query.orderBy.field : 'updatedAt',
      search: query.search,
      filters: JSON.stringify((query.filters || []).map((filter) => ({
        ...filter,
        column: filter.column.field,
      }))),
    })}`;

    return queryAPI(url, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  };

  render() {
    return (
      <Table
        title="User"
        columns={[
          {
            title: 'Date',
            filtering: false,
            field: 'updatedAt',
            render: (row) => <TimeAgo date={(row && row.updatedAt)} />,
          },
          {
            title: 'Verified',
            field: 'isVerified',
            render: (row) => (row.isVerified ? 'verified' : 'un-verified'),
          },
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Email', field: 'email' },
        ]}
        data={this.query}
        options={{
          search: false,
          filtering: true,
          sorting: true,
          pageSize: 20,
          pageSizeOptions: [10, 20, 50, 100],
        }}
      />
    );
  }
}

UsersView.propTypes = {
  userToken: PropTypes.string,
};

UsersView.defaultProps = {
  userToken: null,
};

const mapStateToProps = ({
  settings: { userToken } = {},
}) => ({
  userToken,
});

export default connect(mapStateToProps)(UsersView);

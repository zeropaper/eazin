import { stringify as toQuerystring } from 'querystring';
import React from 'react';
import { connect } from 'react-redux';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';
import queryAPI from '../../core/util/queryAPI';
import Table from '../../components/Table';
import TimeAgo from '../../components/TimeAgo';

class ActivityView extends React.Component {
  query = async (query) => {
    const { userToken } = this.props;

    console.info(query);
    const url = `/api/activities?${toQuerystring({
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
        title="Activity"
        columns={[
          {
            title: 'Date',
            filtering: false,
            field: 'createdAt',
            render: (row) => <TimeAgo date={(row && row.createdAt)} />,
          },
          { title: 'Message', field: 'message' },
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

ActivityView.propTypes = {
  ...ViewPropTypes,
  // activities: PropTypes.objectOf(PropTypes.object).isRequired,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  // activities,
  settings: { userToken } = {},
}) => ({
  // activities,
  userToken,
});

export default connect(mapStateToProps)(ActivityView);

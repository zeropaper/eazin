import React from 'react';
import PropTypes from 'prop-types';

import { Table, TimeAgo } from 'eazin-core/ui';

class ActivityView extends React.Component {
  data = (query) => {
    const { api: { get } } = this.props;
    return get(`/api/activities?${Table.paginationQuerystring(query)}`);
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
        data={this.data}
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
  api: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
};

export default ActivityView;

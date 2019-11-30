import { stringify as toQuerystring } from 'querystring';
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import MaterialTable from 'material-table';
import {
  AddBox as Add,
  Check,
  Clear,
  DeleteOutline as Delete,
  ChevronRight as DetailPanel,
  Edit,
  SaveAlt as Export,
  FilterList as Filter,
  FirstPage,
  LastPage,
  ChevronRight as NextPage,
  ChevronLeft as PreviousPage,
  Clear as ResetSearch,
  Search,
  ArrowDownward as SortArrow,
  Remove as ThirdStateCheck,
  ViewColumn,
} from '@material-ui/icons';

import { Typography } from '@material-ui/core';
import { View as ViewPropTypes } from '../../core/plugins.propTypes';
import queryAPI from '../../core/util/queryAPI';

const icons = {
  Add,
  Check,
  Clear,
  Delete,
  DetailPanel,
  Edit,
  Export,
  Filter,
  FirstPage,
  LastPage,
  NextPage,
  PreviousPage,
  ResetSearch,
  Search,
  SortArrow,
  ThirdStateCheck,
  ViewColumn,
};

class ActivityView extends React.Component {
  query = async (query) => {
    const { userToken } = this.props;

    console.info('query', query);
    const url = `/api/activities?${toQuerystring({
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
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });
  };

  render() {
    return (
      <>
        <header>
          <Typography variant="h2">Activity</Typography>
        </header>

        <MaterialTable
          title={null}
          columns={[
            {
              title: 'Date',
              filtering: false,
              field: 'createdAt',
              render: (row) => moment(row.createdAt).format(),
            },
            { title: 'Message', field: 'message' },
          ]}
          icons={icons}
          data={this.query}
          options={{
            search: false,
            filtering: true,
            sorting: true,
            pageSize: 20,
            pageSizeOptions: [10, 20, 50, 100],
          }}
        />
      </>
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

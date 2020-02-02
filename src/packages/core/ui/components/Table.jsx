import React from 'react';
import { stringify } from 'querystring';

import MaterialTable from 'material-table';
import Add from '@material-ui/icons/AddBox';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import Delete from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Export from '@material-ui/icons/SaveAlt';
import Filter from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import NextPage from '@material-ui/icons/ChevronRight';
import PreviousPage from '@material-ui/icons/ChevronLeft';
import Search from '@material-ui/icons/Search';
import SortArrow from '@material-ui/icons/ArrowDownward';
import ThirdStateCheck from '@material-ui/icons/Remove';
import ViewColumn from '@material-ui/icons/ViewColumn';

const icons = {
  Add,
  Check,
  Clear,
  Delete,
  DetailPanel: NextPage,
  Edit,
  Export,
  Filter,
  FirstPage,
  LastPage,
  NextPage,
  PreviousPage,
  ResetSearch: Clear,
  Search,
  SortArrow,
  ThirdStateCheck,
  ViewColumn,
};

const Table = (props) => (
  <MaterialTable
    icons={icons}
    {...props}
  />
);

Table.propTypes = {
  ...MaterialTable.propTypes,
};

Table.paginationQuerystring = ({
  pageSize,
  page,
  orderDirection,
  orderBy,
  search,
  filters,
} = {}) => {
  const obj = {};
  if (pageSize) obj.limit = pageSize;
  if (page) obj.offset = pageSize * page;
  if (orderDirection) obj.orderDirection = orderDirection;
  if (orderBy) obj.orderBy = orderBy ? orderBy.field : 'updatedAt';
  if (search) obj.search = search;
  if (filters) {
    const arr = filters
      .map((filter) => ({
        ...filter,
        column: filter.column.field,
      }))
      .filter(Boolean);
    if (arr.length) obj.filters = JSON.stringify(arr);
  }
  return stringify(obj);
};

Table.icons = icons;

export default Table;

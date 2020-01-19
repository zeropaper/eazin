import React from 'react';
import { stringify } from 'querystring';

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

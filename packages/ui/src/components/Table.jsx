import React from 'react';

// import MaterialTable from 'material-table';
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

const Table = () => (<div>table</div>);

// const Table = (props) => (
//   <MaterialTable
//     icons={icons}
//     {...props}
//   />
// );

// Table.propTypes = {
//   ...MaterialTable.propTypes,
// };

export default Table;

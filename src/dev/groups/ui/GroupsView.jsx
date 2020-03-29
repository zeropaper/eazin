import React from 'react';
import PropTypes from 'prop-types';

import { Table, Form, TimeAgo } from 'eazin-core/ui';
import { UserName } from 'eazin-users/ui';

class GroupsView extends React.Component {
  static pageTitle = 'Groups';

  constructor(props) {
    super(props);

    this.tableRef = React.createRef();
  }

  data = (query = {}) => {
    const { api: { get } } = this.props;
    return get(`/api/groups?${Table.paginationQuerystring(query)}`);
  };
  // data = async (query = {}) => {
  //   const { api: { get } } = this.props;
  //   const response = await get(`/api/groups?${Table.paginationQuerystring(query)}`);
  //   const returned = {
  //     ...response,
  //     data: response.data.reduce((arr, group) => [
  //       ...arr,
  //       group,
  //       ...(group.members || []).map((memberId) => ({
  //         ...group,
  //         id: memberId,
  //         groupId: group.id,
  //       })),
  //     ], []),
  //   };
  //   console.info('groups data', returned.data);
  //   return returned;
  // };

  handleCreateSuccess = () => {
    const { current } = this.tableRef;
    return current && current.onQueryChange();
  };

  formProcessFields = (values) => ({
    ...values,
    type: 'open',
    approvalType: 'admin',
  });

  formButtons = ({ pristine, invalid, loading }) => ([
    {
      text: 'Reset',
      type: 'reset',
      disabled: pristine || loading,
    },
    {
      text: 'Create Group',
      type: 'submit',
      disabled: pristine || invalid || loading,
    },
  ]);

  render() {
    return (
      <>
        <Form
          method="post"
          url="/api/groups"
          fields={{
            name: {
              label: 'Name',
              required: true,
            },
          }}
          processFields={this.formProcessFields}
          onSuccess={this.handleCreateSuccess}
          resetOnSuccess
          buttons={this.formButtons}
        />

        <Table
          tableRef={this.tableRef}
          title="Groups"
          columns={[
            {
              title: 'Name',
              field: 'name',
            },
            {
              title: 'Admin',
              field: 'admin',
              render: ({ admin }) => !!admin && <UserName id={admin} />,
            },
            {
              title: 'Member',
            },
            // {
            //   type: 'numeric',
            //   title: 'Members',
            //   field: 'members.length',
            //   render: ({ members }) => (members || []).length + 1,
            // },
            // {
            //   title: 'Approval',
            //   field: 'approvalType',
            // },
            {
              type: 'date',
              title: 'Created',
              field: 'createdAt',
              render: ({ createdAt }) => <TimeAgo date={createdAt} />,
            },
          ]}
          // parentChildData={(row, rows) => rows.find((a) => a.id === row.groupId)}
          data={this.data}
          options={{
            filtering: true,
            search: false,
          }}
          // components={{
          //   Row: (props) => console.info('Row', props) || (<span>...</span>),
          // }}
          // detailPanel={[
          //   {
          //     tooltip: 'Show Name',
          //     render: (rowData) => (
          //       <div
          //         style={{
          //           fontSize: 100,
          //           textAlign: 'center',
          //           color: 'white',
          //           backgroundColor: '#43A047',
          //         }}
          //       >
          //         {rowData.name}
          //       </div>
          //     ),
          //   },
          //   {
          //     icon: Table.icons.Add,
          //     tooltip: 'Show Surname',
          //     render: (rowData) => (
          //       <div
          //         style={{
          //           fontSize: 100,
          //           textAlign: 'center',
          //           color: 'white',
          //           backgroundColor: '#E53935',
          //         }}
          //       >
          //         {rowData.admin}
          //       </div>
          //     ),
          //   },
          // ]}
          detailPanel={(rowData) => (
            <div
              style={{
                fontSize: 100,
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#43A047',
              }}
            >
              {rowData.name}
            </div>
          )}
        />
      </>
    );
  }
}

GroupsView.propTypes = {
  api: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
};

export default GroupsView;

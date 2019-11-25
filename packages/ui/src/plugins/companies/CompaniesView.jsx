import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';
import { View as ViewPropTypes } from '../../core/plugins.propTypes';
import { upsertCompanies, upsertCompany } from './companies.actions';
import queryAPI from '../../core/util/queryAPI';
import Form from '../../components/form/Form';

const notEmpty = (val) => (val && val.trim() ? undefined : 'A value is required');

const required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true,
};
const schema = {
  name: {
    label: 'Name',
    ...required,
  },
  buttons: {
    // eslint-disable-next-line no-unused-vars
    buttons: (state, api, field, fields) => [
      {
        disabled: state.pristine,
        type: 'reset',
        text: 'Reset',
        color: 'default',
      },
      {
        disabled: state.pristine || state.error,
        text: 'Ok',
      },
    ],
  },
};

class CompaniesView extends React.Component {
  async componentDidMount() {
    const { userToken, dispatch } = this.props;

    const loaded = await queryAPI('/api/companies', {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });

    dispatch(upsertCompanies(loaded));
  }

  render() {
    const {
      companies,
      dispatch,
      history: { push },
      userToken,
    } = this.props;

    return (
      <>
        <header>
          <Typography variant="h2">Companies</Typography>
        </header>

        <Form
          userToken={userToken}
          fields={schema}
          method="post"
          url="/api/companies"
          onSuccess={(data) => {
            dispatch(upsertCompany(data));
            push(`/companies/${data.id}`);
          }}
          // onFailure={(...args) => console.info('failed', ...args)}
        />

        {Object.keys(companies)
          .filter(Boolean)
          .map((id) => id && (
            <section key={id}>
              <header>
                <h1>
                  {companies[id].name}
                </h1>
              </header>

              <div>
                <Form
                  userToken={userToken}
                  fields={schema}
                  method="patch"
                  url={`/api/companies/${id}`}
                  onSuccess={(data) => {
                    dispatch(upsertCompany(data));
                  }}
                  // onFailure={(...args) => console.info('failed', ...args)}
                />
              </div>
            </section>
          ))}
      </>
    );
  }
}

CompaniesView.propTypes = {
  ...ViewPropTypes,
  companies: PropTypes.objectOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  companies,
  settings: { userToken },
}) => ({
  companies,
  userToken,
});

export default connect(mapStateToProps)(CompaniesView);

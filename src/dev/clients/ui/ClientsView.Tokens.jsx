import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Typography, Grid, Paper, withStyles,
} from '@material-ui/core';
import moment from 'moment';

import TimeAgo from '../../../packages/core/ui/components/TimeAgo';
import Form from '../../../packages/core/ui/components/Form/FormBase';
import DangerButton from '../../../packages/core/ui/components/Form/DangerButton';

export const ErrorState = ({ error, onReload }) => (
  <>
    <Typography color="error" component="div">
      {error.message}
    </Typography>

    <div>
      <Button onClick={onReload}>Retry loading</Button>
    </div>
  </>
);

ErrorState.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  onReload: PropTypes.func.isRequired,
};

export const LoadingState = () => (
  <div>
    Loading tokens
  </div>
);
const UnstyledListState = ({
  tokens,
  classes,
  onDeleteToken,
}) => {
  const handleDeleteToken = (id) => () => onDeleteToken({ id });
  return (
    <Grid container spacing={2}>
      {!tokens || !tokens.length
        ? (
          <Grid item sm={12}>
            <Paper className={classes.paper}>
              No tokens
            </Paper>
          </Grid>
        )
        : tokens.map(({
          id,
          note,
          token,
          createdAt,
          expiresAt,
        }) => (
          <Grid sm={12} md={6} lg={4} item key={id}>
            <Paper className={classes.paper}>
              <div>
                <div>
                  {note}
                </div>

                {token && (
                <div>
                  Token:
                  <pre>{token}</pre>
                  <Typography>
                    You should save this. It will never be shown again.
                  </Typography>
                </div>
                )}

                <div>
                  {'Created '}
                  <TimeAgo date={createdAt} />
                </div>

                <div>
                  {'Expires '}
                  <TimeAgo date={expiresAt} />
                </div>
              </div>

              <div>
                <DangerButton
                  dialogTitle="Are you sure about deleting that token?"
                  dialogContent="It may stop third party services to work properly."
                  onClick={handleDeleteToken(id)}
                >
                  Delete
                </DangerButton>
              </div>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
};

UnstyledListState.propTypes = {
  tokens: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    note: PropTypes.string,
    expiresAt: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]),
    createdAt: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]).isRequired,
  })),
  onDeleteToken: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

UnstyledListState.defaultProps = {
  tokens: null,
};

export const ListState = withStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}))(UnstyledListState);

ListState.displayName = 'ListState';

export const CreateToken = ({ onSuccess, client }) => (
  <Form
    method="post"
    url={`/api/clients/${client.id}`}
    onSuccess={onSuccess}
    resetOnSuccess
    fields={{
      note: {
        label: 'Note',
        required: true,
      },
      expiresIn: {
        type: 'fieldset',
        label: 'Expires in',
        fields: {
          amount: {
            label: 'Amount',
            inputProps: {
              type: 'number',
            },
            initialValue: 1,
          },
          unit: {
            required: true,
            label: 'Unit',
            options: {
              hour: 'Hour(s)',
              day: 'Day(s)',
              week: 'Week(s)',
              month: 'Month(s)',
              year: 'Year(s)',
            },
            initialValue: 'month',
          },
        },
      },
    }}
    processFields={({
      note,
      expiresIn: {
        amount,
        unit,
      },
    }) => ({
      note,
      expiresAt: moment().add(amount, unit).toDate(),
    })}
    buttons={({ pristine, loading, invalid }) => [
      {
        type: 'submit',
        text: 'Create',
        disabled: pristine || loading || invalid,
      },
    ]}
  />
);

CreateToken.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  client: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

const ClientTokens = (props) => {
  const {
    client,
    listTokens,
    onDeleteToken,
  } = props;

  const [tokenRequested, setTokenRequested] = React.useState(false);
  const [tokens, setTokens] = React.useState(null);

  const handleReload = () => {
    setTokens(null);
    setTokenRequested(false);
  };

  const handleTokenCreation = (token) => {
    setTokens([...tokens || [], token]);
  };

  const handleDeleteToken = async (token) => {
    await onDeleteToken(token);
    handleReload();
  };

  if (!tokenRequested && !tokens) {
    listTokens(client.id)
      .then(setTokens)
      .catch(setTokens);
    setTokenRequested(true);
  }

  let content = null;
  if (tokenRequested && !tokens) {
    content = (
      <LoadingState />
    );
  } else if (tokens instanceof Error) {
    content = (
      <ErrorState error={tokens} onReload={handleReload} />
    );
  } else {
    content = (
      <ListState tokens={tokens} onDeleteToken={handleDeleteToken} />
    );
  }

  return (
    <>
      <CreateToken
        client={client}
        onSuccess={handleTokenCreation}
      />

      {content}
    </>
  );
};

ClientTokens.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  listTokens: PropTypes.func.isRequired,
  onDeleteToken: PropTypes.func.isRequired,
};

export default ClientTokens;

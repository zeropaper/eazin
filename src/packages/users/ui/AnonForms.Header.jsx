import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const flexVert = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
};

const useStyles = makeStyles((theme) => createStyles({
  root: {
    maxWidth: 320,
    margin: 'auto',
    height: theme.spacing(12) * 2,
    marginTop: `-${theme.spacing(4)}px`,
    marginBottom: theme.spacing(2),
    ...flexVert,
    [theme.breakpoints.down('md')]: {
      height: theme.spacing(12),
    },
  },
  paper: {
    flexGrow: 1,
    textAlign: 'center',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    ...flexVert,
  },
}));

const AnonFormsHeader = ({
  siteName = 'eazin',
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3" component="div">
          {siteName}
        </Typography>
      </Paper>
    </div>
  );
};

AnonFormsHeader.propTypes = {
  siteName: PropTypes.string,
};

AnonFormsHeader.defaultProps = {
  siteName: 'eazin',
};

export default AnonFormsHeader;

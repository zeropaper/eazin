import React from 'react';
import {
  MenuItem,
  ListItemIcon,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import { withRouter, matchPath } from 'react-router-dom';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  item: {
    fontSize: '1.2rem',
  },
}));

export default withRouter(({
  children,
  to,
  history: { push },
  location: { pathname },
  Icon = DraftsIcon,
}) => {
  const classes = useStyles();
  const goTo = () => push(to);

  return (
    <MenuItem
      selected={!!matchPath(pathname, to)}
      onClick={goTo}
      className={classes.root}
    >
      <ListItemIcon className={classes.itemIcon}>
        <Icon className={classes.icon} />
      </ListItemIcon>
      <Typography
        className={classes.item}
        variant="inherit"
        noWrap
      >
        {children}
      </Typography>
    </MenuItem>
  );
});

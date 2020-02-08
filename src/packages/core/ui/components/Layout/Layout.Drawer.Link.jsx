import React from 'react';
import {
  MenuItem,
  ListItemIcon,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import { withRouter, matchPath } from 'react-router-dom';

const useStyles = makeStyles(() => createStyles({
  item: {
    fontSize: '1.2rem',
  },
}));

export default withRouter(({
  children,
  to,
  history: { push },
  location: { pathname },
  Icon,
}) => {
  const classes = useStyles();
  const goTo = () => push(to);

  return (
    <MenuItem
      selected={!!matchPath(pathname, to)}
      onClick={goTo}
    >
      {Icon && (
        <ListItemIcon className={classes.itemIcon}>
          <Icon className={classes.icon} />
        </ListItemIcon>
      )}
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

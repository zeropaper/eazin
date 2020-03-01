/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/styles';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import * as colors from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from 'eazin-core/ui/components/Form/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => createStyles({
  colorDot: {
    display: 'inline-block',
    textIndent: '-99em',
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: theme.spacing(2),
    minWidth: 0,
  },
}));

const PaletteColorPopper = ({
  id,
  anchorEl,
  onPick,
  onClose,
}) => {
  const handleClick = (color) => () => {
    onPick(color);
    onClose();
  };
  return (
    <Popper
      id={id}
      open={!!anchorEl}
      anchorEl={anchorEl}
      style={{
        width: anchorEl ? anchorEl.clientWidth : 0,
      }}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper>
          <List component="nav">
            {Object.keys(colors)
              .filter((key) => key !== 'common')
              .map((key) => (
                <ListItem key={key} button onClick={handleClick(key)}>
                  {key}
                </ListItem>
              ))}
          </List>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

PaletteColorPopper.propTypes = {
  id: PropTypes.string.isRequired,
  anchorEl: PropTypes.node,
  onPick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

PaletteColorPopper.defaultProps = {
  anchorEl: null,
};

const PaletteColorPicker = (props) => {
  const classes = useStyles();
  // const val = props.initialValue;
  // console.info(val);
  const setValue = (newVal) => {
    // console.info('new val', newVal, colors[newVal]);
    props.api.setValue(newVal);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TextField
        {...props}
        onClick={handleClick}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span
                disableRipple
                className={classes.colorDot}
                style={{
                // backgroundColor: theme.palette[name].main,
                  // backgroundColor: colors[val][500],
                }}
              >
                Pick
              </span>
            </InputAdornment>
          ),
        }}
      />
      <PaletteColorPopper
        id={props.field}
        anchorEl={anchorEl}
        onPick={setValue}
        onClose={handleClose}
      />
    </>
  );
};

PaletteColorPicker.propTypes = {
  field: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  api: PropTypes.shape({
    setValue: PropTypes.func.isRequired,
  }).isRequired,
};

PaletteColorPicker.defaultProps = {
  initialValue: '',
};

export default PaletteColorPicker;

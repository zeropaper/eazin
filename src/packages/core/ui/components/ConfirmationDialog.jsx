import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  text: {
    marginBottom: theme.spacing(1.5),
    color: theme.palette.text.secondary,
  },
}));

const ConfirmationDialog = ({
  open,
  title,
  children,
  onReject: handleClose,
  rejectLabel,
  onConfirm: handleConfirm,
  confirmLabel,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        {title}
      </DialogTitle>

      <DialogContent>
        <Typography component="div" className={classes.text}>
          {children}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          {rejectLabel || 'Cancel'}
        </Button>

        <Button onClick={handleConfirm} autoFocus>
          {confirmLabel || 'Proceed'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onReject: PropTypes.func.isRequired,
  rejectLabel: PropTypes.node,
  onConfirm: PropTypes.func.isRequired,
  confirmLabel: PropTypes.node,
};

ConfirmationDialog.defaultProps = {
  rejectLabel: 'Cancel',
  confirmLabel: 'Proceed',
};

export default ConfirmationDialog;

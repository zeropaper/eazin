import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ConfirmationDialog from '../ConfirmationDialog';
import Button from './Button';

const DangerButton = ({
  children,
  onClick,

  dialogContent,
  dialogTitle,
  okLabel,
  cancelLabel,
  loading,

  type,
  ...buttonPropRest
}) => {
  const [open, setOpen] = useState(false);
  const [originalTarget, storeTarget] = useState(null);
  const handleButtonClick = (evt) => {
    if (evt && !open) {
      if (evt.preventDefault) evt.preventDefault();
      if (evt.currentTarget) storeTarget(evt.currentTarget);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    storeTarget(null);
  };

  const handleConfirmation = () => {
    if (typeof onClick === 'function') {
      onClick();
    } else if (type === 'submit') {
      originalTarget.click();
    }

    handleClose();
  };

  return (
    <>
      <Button
        type={type}
        {...buttonPropRest}
        onClick={handleButtonClick}
      >
        {children}
      </Button>

      <ConfirmationDialog
        open={open}
        loading={loading}
        title={dialogTitle}
        confirmLabel={okLabel}
        rejectLabel={cancelLabel}
        onConfirm={handleConfirmation}
        onReject={handleClose}
      >
        {dialogContent}
      </ConfirmationDialog>
    </>
  );
};

DangerButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogContent: PropTypes.node,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string,
};

DangerButton.defaultProps = {
  dialogContent: null,
  okLabel: null,
  cancelLabel: null,
  loading: false,
  type: 'button',
};

export default DangerButton;

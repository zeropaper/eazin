import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import ConfirmationDialog from '../ConfirmationDialog';

const DangerButton = ({
  children,
  onClick,

  dialogContent,
  dialogTitle,
  okLabel,
  cancelLabel,

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

  const handleCancelation = () => {
    setOpen(false);
    storeTarget(null);
  };

  const handleConfirmation = () => {
    if (typeof onClick === 'function') {
      onClick();
    } else if (type === 'submit') {
      originalTarget.click();
    }

    handleCancelation();
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
        title={dialogTitle}
        confirmLabel={okLabel}
        rejectLabel={cancelLabel}
        onConfirm={handleConfirmation}
        onReject={handleCancelation}
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
  dialogMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  dialogContent: PropTypes.node,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
};

DangerButton.defaultProps = {
  dialogMessage: null,
  dialogContent: null,
  okLabel: null,
  cancelLabel: null,
};

export default DangerButton;

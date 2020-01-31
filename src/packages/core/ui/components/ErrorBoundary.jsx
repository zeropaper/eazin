import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // eslint-disable-next-line no-console
    console.warn('getDerivedStateFromError', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.warn('Catched error', error, errorInfo);
    // // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const {
      state: { hasError },
      props: { errorMessage, children },
    } = this;
    if (hasError) {
      return errorMessage || <span>Something went wrong.</span>;
    }

    // eslint-disable-next-line react/destructuring-assignment
    return children;
  }
}

ErrorBoundary.propTypes = {
  errorMessage: PropTypes.node,
  children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
  errorMessage: null,
  children: null,
};

export default ErrorBoundary;

export const withErrorBoundary = (Comp) => (props) => (
  <ErrorBoundary><Comp {...props} /></ErrorBoundary>
);

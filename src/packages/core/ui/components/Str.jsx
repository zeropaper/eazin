import PropTypes from 'prop-types';

import { withAppContext, appContextShape } from '../core/AppContext';

const Str = ({ en: value }) => (value || null);

const WithContext = withAppContext(Str);

WithContext.displayName = 'Str';

WithContext.propTypes = {
  ...appContextShape,
  en: PropTypes.string.isRequired,
};

export default WithContext;

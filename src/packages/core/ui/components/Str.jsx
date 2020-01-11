import PropTypes from 'prop-types';

import { withAppContext, appContextShape } from '../core/AppContext';

const Str = ({ en: value }) => value;

Str.propTypes = {
  ...appContextShape,
  en: PropTypes.string.isRequired,
};

export default withAppContext(Str);

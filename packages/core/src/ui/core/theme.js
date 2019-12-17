import { createMuiTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';

const {
  amber: primary,
  deepOrange: accent,
} = colors;

export const makeTheme = (type) => createMuiTheme({
  palette: {
    primary,
    accent,
    type,
  },
  typography: {
    useNextVariants: true,
  },
});

export default createMuiTheme({
  palette: {
    primary,
    accent,
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

export default (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  top: {
    maxWidth: '100%',
    padding: 0,
  },

  bottom: {
    margin: theme.spacing(1),
  },

  menuLink: {
    color: 'currentColor',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
      width: '20vw',
    },
    display: 'block',
    '&.active': {
      textDecoration: 'underline',
    },
  },
});

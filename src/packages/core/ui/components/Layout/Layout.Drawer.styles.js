export default (theme) => ({
  root: {
    width: '20vw',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  top: {
    maxWidth: '100%',
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

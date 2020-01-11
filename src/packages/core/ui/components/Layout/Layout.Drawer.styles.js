export default (theme) => ({
  root: {
    minWidth: '20vw',
    maxWidth: '45vw',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'auto',
  },

  menuLink: {
    color: 'currentColor',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
    display: 'block',
    '&.active': {
      textDecoration: 'underline',
    },
  },
});
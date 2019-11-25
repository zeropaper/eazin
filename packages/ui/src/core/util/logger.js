export default (scope, color = 'black', force = true) => (...args) => (
  (process.env.NODE_ENV !== 'production' || force)
  // eslint-disable-next-line no-console
  && console.info(`%c[${scope}]`, `color: ${color}`, ...args)
);

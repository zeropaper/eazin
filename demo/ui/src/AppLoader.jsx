import React from 'react';

import App from 'eazin-ui/dist/App';

const load = async () => ({
  landing: (await import(/* webpackChunkName: "eazinlanding" */'eazin-ui/dist/plugins/landing')).default,
  repositories: (await import(/* webpackChunkName: "eazinrepositories" */'eazin-ui/dist/plugins/repositories')).default,
  user: (await import(/* webpackChunkName: "eazinuser" */'eazin-ui/dist/plugins/user')).default,
  settings: (await import(/* webpackChunkName: "eazinsettings" */'eazin-ui/dist/plugins/settings')).default,
});

class AppLoader extends React.Component {
  state = {
    plugins: null,
  };

  async componentDidMount() {
    this.setState({ plugins: await load() });
  }

  render() {
    const { plugins } = this.state;
    return (<App plugins={plugins} />);
  }
}

export default AppLoader;

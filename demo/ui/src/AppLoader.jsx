import React from 'react';

import App from /* webpackChunkName: "appcore" */'@eazin/ui/src/App';

class AppLoader extends React.Component {
  state = {
    plugins: null,
  };

  async componentDidMount() {
    this.setState({
      plugins: {
        landing: (await import('@eazin/ui/src/plugins/landing')).default,
        repositories: (await import('@eazin/ui/src/plugins/repositories')).default,
        user: (await import('@eazin/ui/src/plugins/user')).default,
        settings: (await import('@eazin/ui/src/plugins/settings')).default,
        // a: (await import('@eazin/ui/src/plugins/p-a')).default,
        // b: (await import('@eazin/ui/src/plugins/p-b')).default,
      },
    });
  }

  render() {
    const { plugins } = this.state;
    return (<App plugins={plugins} />);
  }
}

export default AppLoader;

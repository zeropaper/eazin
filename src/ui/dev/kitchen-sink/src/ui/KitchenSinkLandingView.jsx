import React from 'react';

import { Link } from '@material-ui/core';
import ChuckNorris from './ChuckNorris';

class GH extends React.Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { api: { get } } = this.props;
    this.setState({ items: await get('/api/kitchen-sink/project') });
  }

  render() {
    const { items } = this.state;
    return (
      <ul>
        {items.map((item) => (
          <li key={item.url}>
            {item.state}
            :&nbsp;
            <Link
              href={item.html_url}
              target="gh-issues"
              rel="noopener noreferrer"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

const GroupsLandingView = (props) => {
  const { wrapIn: WrapIn } = props;
  return [
    <WrapIn key="a">
      <GH {...props} />
    </WrapIn>,

    <WrapIn key="b">
      <ChuckNorris />
    </WrapIn>,
  ];
};

export default GroupsLandingView;

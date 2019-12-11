import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';
import { View as ViewPropTypes } from '../../core/plugins.propTypes';
import { getDocs } from './docs.actions';
import queryAPI from '../../core/util/queryAPI';

class DocsView extends React.Component {
  async componentDidMount() {
    const { loadDocs, docs: { server } } = this.props;
    if (!server) await loadDocs();
  }

  render() {
    const {
      docs: {
        server,
        ui,
      },
    } = this.props;

    return (
      <>
        <header>
          <Typography variant="h2">Documentation</Typography>
        </header>

        <section>
          <Typography variant="h3">Plugins</Typography>

          {server && (
            <>
              <Typography variant="h4">Server</Typography>

              {server.description && <div>{server.description}</div>}

              {Object.keys(server.plugins).map((name) => (
                <div key={name}>
                  <Typography variant="h5">{name}</Typography>

                  {server.plugins[name].description && (
                    <div>{server.plugins[name].description}</div>
                  )}

                  {server.plugins[name].keys && (
                    <ul>
                      {Object.keys(server.plugins[name].keys).map((key) => (
                        <li key={key}>
                          <strong>{key}</strong>
                          {server.plugins[name].keys[key].description && <br />}
                          {server.plugins[name].keys[key].description || ''}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </>
          )}

          {ui && (
            <>
              <Typography variant="h4">Browser</Typography>

              {Object.keys(ui.plugins).map((name) => (
                <div key={name}>
                  <Typography variant="h5">{name}</Typography>
                  <div>{ui.plugins[name].description || ''}</div>
                </div>
              ))}
            </>
          )}
        </section>
      </>
    );
  }
}

DocsView.propTypes = {
  ...ViewPropTypes,
  docs: PropTypes.objectOf(PropTypes.object).isRequired,
  loadDocs: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  docs,
}) => ({
  docs,
});

const mapDispatchToProps = (dispatch) => ({
  loadDocs: async () => dispatch(getDocs(await queryAPI('/api/docs'))),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocsView);

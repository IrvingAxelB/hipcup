import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
//import { ReduxRouter } from 'redux-router'
import DevTools from './DevTools'
import getRoutes from '../../routes'

export default class Root extends Component {
  render() {

    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {getRoutes()}
          </Router>
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'
import { App } from './client/containers/app.js'
import { ShopsListContainer } from './client/containers/shopsListContainer.js'

const history = useBasename(createHistory)({
  basename: '/'
})

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={ShopsListContainer} />
    </Route>
  </Router>
)

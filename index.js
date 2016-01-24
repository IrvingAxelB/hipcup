import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './client/containers/Root'
import configureStore from './client/store/configStore'
import createHistory from 'history/lib/createHashHistory'
import { syncHistory } from 'redux-simple-router'

const store = configureStore()
const history = createHistory()
// console.log("history", history, "store", store);
// console.log("syncHistory", syncHistory(history));
const reduxRouterMiddleware = syncHistory(history);
console.log("reduxRouterMiddleware:", reduxRouterMiddleware);
reduxRouterMiddleware.listenForReplays(store);

// console.log('syncReduxAndRouter', syncReduxAndRouter, typeof syncReduxAndRouter);

render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
)

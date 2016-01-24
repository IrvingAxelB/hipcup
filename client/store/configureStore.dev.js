import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import DevTools from '../containers/DevTools'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../../routes'
import thunk from 'redux-thunk'
import { syncHistory } from 'redux-simple-router'
import { browserHistory } from 'react-router'
// import api from 'redux-api-middleware'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'


// const reduxRouterMiddleware = syncHistory(browserHistory);
const finalCreateStore = compose(
  // applyMiddleware(thunk, api),
  // reduxReactRouter({ routes, createHistory }),
  // applyMiddleware(reduxRouterMiddleware),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

console.log("syncHistory in config store", browserHistory)
export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute,IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'
import Header from '../components/header'
import Footer from '../components/footer'

class Main extends React.Component {

  render() {
    return <div>
      <Header />
      {this.props.children}
      <Footer />
    </div>
  }
}

const history = useBasename(createHistory)({
  basename: '/'
})

render((
  <Router history={history}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
), document.getElementById('app'))


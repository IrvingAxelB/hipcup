import React from 'react'
import { render } from 'react-dom'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import ShopsListContainer from './shopsListContainer'

class App extends React.Component {

  render() {
    return (
      <div>
      hi
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Map from './map.js'

class Shop extends React.Component {
  render(){
    console.log("inside shop component");

    return(
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.address}</li>
          <li>Open: {JSON.stringify(this.props.isOpen)}</li>
        </ul>
        <Map />
      </div>
    )
  }
}

export default Shop;

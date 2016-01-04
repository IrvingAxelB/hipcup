import React from 'react';
import Shop from './shop.js';

class ShopList extends React.Component {
  render(){
    let shops = <div>Nothing here yet</div>

    if(this.props.fetched){
      console.log("data within fetched", this.props.data);
      shops = this.props.data.map((store, ind) => {
        console.log("inside map")
        return (<Shop name={store.name} address={store.formatted_address}  isOpen={store.opening_hours.open_now} key={ind}/>)
      });
    }

    return (
      <div>
        <h2>shopList Component</h2>
        {shops}
      </div>
    )
  }
}

export default ShopList;

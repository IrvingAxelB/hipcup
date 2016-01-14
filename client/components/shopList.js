import React from 'react';
import Shop from './shop.js';

class ShopList extends React.Component {
  render(){
    let shops = <div></div>

    if(this.props.fetched){
      shops = this.props.data.map((store, ind) => {
        return (<Shop name={store.name} address={store.formatted_address} isOpen={store.opening_hours.open_now} key={ind}/>)
      }).filter(val => val !== undefined);
    }

    return (
      <div className='results'>
        <h2 className='listResultsTitle'>Hip Coffee Places</h2>
        <div>
          {shops}
        </div>
      </div>
    )
  }
}

export default ShopList;

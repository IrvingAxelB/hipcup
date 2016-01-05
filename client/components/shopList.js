import React from 'react';
import Shop from './shop.js';

class ShopList extends React.Component {
  render(){
    let shops = <div></div>

    if(this.props.fetched){
      console.log('data within fetched', this.props.data);
      shops = this.props.data.map((store, ind) => {
        if(store.name !== 'Starbucks' && store.name !== 'Peet\'s Coffee & Tea' && store.name !== 'The Coffee Bean & Tea Leaf'){
          return (<Shop name={store.name} address={store.formatted_address}  isOpen={store.opening_hours.open_now} key={ind}/>)
        }
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

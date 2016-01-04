import React from 'react';
import Shoplist from './shopList.js';

class HipcupApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: '',
      lng: '',
      shops: '',
      fetched: false
    }
  }

  fetchShops(){
    $.ajax({
      url: 'http://127.0.0.1:8080/google',
      method: 'GET',
      crossDomain: 'true',
      dataType: 'json',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({shops: data.results});
      }.bind(this),
      error:function(xhr, status, err){
        console.error(err.toString());
      }.bind(this)
    });

    this.setState({fetched: true});
  }

  render(){
    return (
      <div>
        <button onClick={this.fetchShops.bind(this)}>Shops nearby</button>
        <Shoplist data={this.state.shops} fetched={this.state.fetched}/>
      </div>
    )
  }
}

export default HipcupApp;

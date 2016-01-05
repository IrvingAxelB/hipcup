import React from 'react';
import Button from 'react-bootstrap/lib/button.js'
import Shoplist from './shopList.js';
import Map from './map.js';

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
      url: 'http://127.0.0.1:3468/google',
      method: 'POST',
      crossDomain: 'true',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({shops: data.stores.results});
        this.setState({lat: data.lat});
        this.setState({lng: data.lng});
        this.setState({fetched: true});
      }.bind(this),
      error:function(xhr, status, err){
        console.error(err.toString());
      }.bind(this)
    });
  }

  render(){

    return (
      <div>
        <div className="coffeeFinderButtonWrapper">
          <Button className="coffeeFinderButton" bsStyle="info" onClick={this.fetchShops.bind(this)}>Find Coffee!</Button>
        </div>
        <div>
          <Map googleKey={this.props.googleKey} latitude={this.state.lat}  longitude={this.state.lng} data={this.state.shops} fetched={this.state.fetched}/>
          <Shoplist data={this.state.shops} fetched={this.state.fetched}/>
        </div>
      </div>
    )
  }
}

export default HipcupApp;

import React from 'react';

class HipcupApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: '',
      lng: '',
      shops: ''
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
        this.setState({shops: data});
      }.bind(this),
      error:function(xhr, status, err){
        console.error(err.toString());
      }.bind(this)
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.fetchShops.bind(this)}>Shops nearby</button>
        <h1>Results:{JSON.stringify(this.state.shops)}</h1>
      </div>
    )
  }
}

export default HipcupApp;

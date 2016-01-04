import React from 'react';

class Datadisplay extends React.Component {
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
        <p>Here the data:{this.state.shops}</p>
        <button onClick={this.fetchShops}>Click here for nearby shops</button>
      </div>
    )
  }
}

export default Datadisplay;

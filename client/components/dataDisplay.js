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
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee&location=34.0193967,-118.49669&radius=5000&key=AIzaSyBa9XzxdfkIpRRk6ahCZB6-f94G_MJ0qL4',
      method: 'GET',
      dataType: 'json',
      cache: false,
      success: function(data){
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

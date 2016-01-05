import React from 'react';
import GoogleMap from 'google-map-react';
import Mapmarker from './mapMarker.js';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      center: {lat: 34.0157219, lng: -118.4966245},
      zoom: 13
    }
  };

  render(){
    return (
      <GoogleMap
       bootstrapURLKeys={{key: this.props.googleKey}}
       defaultCenter={this.state.center}
       defaultZoom={this.state.zoom}>

        <div style={{border: '1px solid red'}} className="hello" lat={34.0157219} lng={-118.4966245}>MyPlace</div>
        <Mapmarker lat={34.032773} lng={-118.452798}/>
     </GoogleMap>
    )
  }
}

export default Map

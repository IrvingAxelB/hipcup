import React from 'react';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './marker.js';

class Maptest extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      center: {lat: 34.0157219, lng: -118.4966245},
      zoom: 9
    }
  }

  render() {
    return (
      <GoogleMap
       bootstrapURLKeys={{key: this.props.googleKey}}
       defaultCenter={this.state.center}
       defaultZoom={this.state.zoom}>
       <div className="hello" lat={34.0157219} lng={-118.4966245}>MyPlace</div>
     </GoogleMap>
    )
  }
}

export default Maptest

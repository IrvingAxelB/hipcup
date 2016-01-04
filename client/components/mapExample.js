import React from 'react';
import GoogleMap from 'google-map-react';

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
       bootstrapURLKeys={{key: API_KEY}}
       defaultCenter={this.state.center}
       defaultZoom={this.state.zoom}>
     </GoogleMap>
    )
  }
}

export default Maptest

import React from 'react';
import GoogleMap from 'google-map-react';
import Mapmarker from './mapMarker.js';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // TODO: center should be geolcoated where you are
      center: {lat: 34.0157219, lng: -118.4966245},
    }
  };

  render(){
    //TODO: center around invisible or image
    let markers = <div lat={34.0157219} lng={-118.4966245}>"one second please"</div>;

    if(this.props.fetched){
      markers = this.props.data.map((store, ind) => {
        if(store.name !== 'Starbucks' && store.name !== 'Peet\'s Coffee & Tea' && store.name !== 'The Coffee Bean & Tea Leaf'){
          return (<Mapmarker lat={store.geometry.location.lat} lng={store.geometry.location.lng} key={ind}/>)
        }
      }).filter(val => val !== undefined);
    }

    return (
      <GoogleMap
       bootstrapURLKeys={{key: this.props.googleKey}}
       defaultCenter={this.state.center}
       defaultZoom={13}>
        {markers}
     </GoogleMap>
    )
  }
}

export default Map

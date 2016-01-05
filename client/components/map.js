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
    let markers = '';
    // store.geometry.location.lat

    if(this.props.fetched){
      console.log("inside marker creator")
      markers = this.props.data.map((store, ind) => {
        if(store.name !== 'Starbucks' && store.name !== 'Peet\'s Coffee & Tea' && store.name !== 'The Coffee Bean & Tea Leaf'){
          return (<Mapmarker lat={34.032773} lng={-118.4966245} key={ind} />)
        }
      }).filter(val => val !== undefined);
    }

    return (
      <GoogleMap
       bootstrapURLKeys={{key: this.props.googleKey}}
       defaultCenter={this.state.center}
       defaultZoom={13}>

        <div style={{border: '1px solid red'}} className="hello" lat={34.0157219} lng={-118.4966245}>MyPlace</div>

        <Mapmarker lat={34.032773} lng={-118.452798}/>
     </GoogleMap>
    )
  }
}

export default Map

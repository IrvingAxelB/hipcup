import React from 'react';
import GoogleMap from 'google-map-react';
import Mapmarker from './mapMarker.js';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      center: {lat: 34.0157219, lng: -118.4966245},
    }
  };

  render(){
    let markers = <div lat={34.0157219} lng={-118.4966245}>"WE'RE FINDING YOUR COFFEE SHOP"</div>;
    let map = <GoogleMap
     bootstrapURLKeys={{key: this.props.googleKey}}
     defaultCenter={this.state.center}
     defaultZoom={13}>
      {markers}
   </GoogleMap>

    if(this.props.fetched){
      markers = this.props.data.map((store, ind) => {
        if(store.name !== 'Starbucks' && store.name !== 'Peet\'s Coffee & Tea' && store.name !== 'The Coffee Bean & Tea Leaf'){
          return (<Mapmarker lat={store.geometry.location.lat} lng={store.geometry.location.lng} key={ind} />)
        }
      }).filter(val => val !== undefined);

      map = <GoogleMap
       bootstrapURLKeys={{key: this.props.googleKey}}
       defaultCenter={this.state.center}
       defaultZoom={13}
       center={{lat: this.props.latitude, lng:this.props.longitude}}>
        {markers}
     </GoogleMap>
    }

    return (
      <div style={{width: '100%', height: 400}}>
        {map}
      </div>
    )
  }
}

export default Map

import React from 'react';

class Mapmarker extends React.Component {
  render(){
    let imgSrc = './../assets/Chemex.png'

    return (
      <div>
        <img src={imgSrc} />
      </div>
    )
  }
}

export default Mapmarker;

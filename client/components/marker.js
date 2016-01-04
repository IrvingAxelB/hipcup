import React from 'react';
import {greatPlaceStyle} from './markerStyles.js';

class MyGreatPlace extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}

export default MyGreatPlace

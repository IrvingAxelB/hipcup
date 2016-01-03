import React from 'react';

class Datadisplay extends React.Component {
  render() {
    return (
      <div>
        <h2>Here be the data: {this.props.googleKey}</h2>
      </div>
    )
  }
}

export default Datadisplay;

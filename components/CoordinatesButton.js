import React from 'react'

class CoordinatesButton extends React.Component {
  constructor() {
    super();
  }
  handleClick(event) {
    const x = event.clientX
    const y = event.clientY
    this.props.onReceiveCoordinates([x,y])
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Give Me Coordinates</button>
    )
  }
}

export default CoordinatesButton

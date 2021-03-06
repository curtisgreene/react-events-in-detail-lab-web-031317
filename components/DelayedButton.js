import React from 'react'

class DelayedButton extends React.Component {
  constructor(props){
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.persist();
    setTimeout(this.props.onDelayedClick,
      this.props.delay,
      event)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Button</button>
    )
  }
}

export default DelayedButton

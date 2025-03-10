// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }
  
  handleClick = () => {
    this.setState(prev => ({
      timesClicked: (prev.timesClicked + 1)
    }))
  }

  
  render(){
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      )
  }
  
}

export default DigitalClicker
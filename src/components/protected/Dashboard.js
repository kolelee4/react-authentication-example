import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      exampleState: {}
    }

    this.addTextToState = this.addTextToState.bind(this)
  }

  addTextToState() {
    this.setState({
      exampleState: 'Here is some state.'
    })
  }

  render () {
    return (
      <div>
        Dashboard. This is a protected route. You can only see this if you're authed.
        <br/>
        <button
          onClick={this.addTextToState}
        >
          Make State
        </button>
      </div>
    )
  }
}

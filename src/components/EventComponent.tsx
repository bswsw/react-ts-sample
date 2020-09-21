import React from "react";

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is: ', this)
  }

  handleClick2() {
    console.log('2. this is: ', this)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click me (Open Console)
        </button>

        <button onClick={() => this.handleClick2()}>
          Click me 2 (Open Console)
        </button>
      </div>
    )
  }
}

type ToggleState = {
  isToggleOn: boolean
}

class Toggle extends React.Component<{}, ToggleState> {

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      isToggleOn: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default class EventComponent extends React.Component {
  render() {
    return (
      <div>
        <Toggle/>
        <LoggingButton/>
      </div>
    )
  }
}

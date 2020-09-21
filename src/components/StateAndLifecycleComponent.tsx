import React from "react";

type ClockState = {
  date: Date
}

const FormattedDate = (props: { date: Date }) => (
  <h2>It is {props.date.toLocaleTimeString()}</h2>
)

class Clock extends React.Component<{}, ClockState> {
  timerId: NodeJS.Timeout

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      date: new Date()
    }

    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  // 컴포넌트가 Dom에 렌더링 된 후 실행
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  // 컴포넌트가 Dom에서 삭제된 후 실행
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date}/>
      </div>
    )
  }
}

export default class StateAndLifecycleComponent extends React.Component {
  render() {
    return (
      <div>
        <Clock/>
        <Clock/>
        <Clock/>
      </div>
    )
  }
}

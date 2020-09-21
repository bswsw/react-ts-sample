import React from "react";

type WelcomeProps = {
  name: string
}

class Welcome extends React.Component<WelcomeProps> {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}


export default class ReactComponentClass extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="alan"/>
        <Welcome name="bae"/>
        <Welcome name="sangwoo"/>
      </div>
    )
  }
}

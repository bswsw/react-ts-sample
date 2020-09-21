import React from "react";

const SplitPane = (props: { left: React.ReactNode; right: React.ReactNode }) => (
  <div className="SplitPane">
    <div className="SplitPane-Left">
      {props.left}
    </div>
    <div className="SplitPane-Right">
      {props.right}
    </div>
  </div>
)

const Contract = () => <h1>Contract</h1>
const Chat = () => <h1>Chat</h1>

const Pane = () => (
  <SplitPane
    left={<Contract/>}
    right={<Chat/>}
  />
)

const FancyBoard = (props: { children: React.ReactNode; color: string }) => (
  <div className={`FancyBorder FancyBorder-${props.color}`}>
    {props.children}
  </div>
)

const WelcomeDialog = () => (
  <FancyBoard color="blue">
    <h1 className="Dialog-title">Welcome</h1>
    <p className="Dialog-message">
      Thank you for visiting our spacecraft!
    </p>
  </FancyBoard>
)

const Dialog = (props: {title: string; message: string; children: React.ReactNode}) => (
  <FancyBoard color="red">
    <h1 className="Dialog-title">
      {props.title}
    </h1>
    <p className="Dialog-message">
      {props.message}
    </p>
    {props.children}
  </FancyBoard>
)

class SignUpDialog extends React.Component<{}, { login: string }> {

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      login: ''
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({login: e.target.value})
  }

  handleSignUp = () => {
    if (this.state.login.length > 0) {
      alert(`Welcome aboard, ${this.state.login}!`)
    }
  }

  render() {
    return (
      <Dialog
        title="Mars exploration Program"
        message="How should we refer to you?"
      >
        <input
          value={this.state.login}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSignUp} disabled={this.state.login.length < 1}>Sign Me Up!</button>
      </Dialog>
    )
  }
}

export default class CompositionVsInheritanceComponent extends React.Component {
  render() {
    return (
      <div>
        <WelcomeDialog/>
        <hr/>
        <Pane/>
        <hr/>
        <SignUpDialog/>
      </div>
    )
  }
}

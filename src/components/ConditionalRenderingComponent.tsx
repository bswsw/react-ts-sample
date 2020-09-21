import React from "react";

const WarningBanner = (props: {warn: boolean}) => {
  if (!props.warn) {
    return null
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

const Mailbox = (props: { unreadMessages: Array<string> }) => {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello, Mailbox!</h1>
      {unreadMessages.length > 0 &&
      <h2>
        You have {unreadMessages.length} unread messages.
      </h2>
      }
    </div>
  )
}

const UserGreeting = () => <h1>Welcome back!</h1>

const GuestGreeting = () => <h1>Please sign up.</h1>

const Greeting = (props: { isLoggedIn: boolean }) => {
  const isLoggedIn = props.isLoggedIn
  const component = isLoggedIn
  ? <UserGreeting/>
  : <GuestGreeting/>

  return (
    <div>
      {component}
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  )
}

const LoginButton = (props: { onClick: () => void }) => (
  <button onClick={props.onClick}>
    Login
  </button>
)

const LogoutButton = (props: { onClick: () => void }) => (
  <button onClick={props.onClick}>
    Logout
  </button>
)

interface ILoginControlState {
  isLoggedIn: boolean
}

class LoginControl extends React.Component<{}, ILoginControlState> {

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    const button = isLoggedIn
      ? <LogoutButton onClick={this.handleLogoutClick}/>
      : <LoginButton onClick={this.handleLoginClick.bind(this)}/>

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}

export default class ConditionalRenderingComponent extends React.Component {
  render() {
    const isWarn = Math.floor(Math.random() * 10) % 2 === 0

    return (
      <div>
        <LoginControl/>
        <hr/>
        <WarningBanner warn={isWarn}/>
        <hr/>
        <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']}/>
      </div>
    )
  }
}

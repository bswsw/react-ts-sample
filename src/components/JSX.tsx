import React from "react";

type User = {
  firstName: string
  lastName: string
}

const formatName = (user: User) => `${user.firstName} ${user.lastName}`

const getGreeting = (user: User) => {
  if (user) {
    return <h1 className="greeting">Hello, {formatName(user)}</h1>
  }
  return <h1 className="greeting">Hello, Stranger.</h1>
}

export default function JSX() {
  const user: User = {
    firstName: 'alan',
    lastName: 'bae',
  }

  return getGreeting(user)
}

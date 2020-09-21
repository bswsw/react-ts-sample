import React from "react";

interface IAvatarProps {
  user: {
    avatarUrl: string
    name: string
  }
}

const Avatar = (props: IAvatarProps) => (
  <img
    className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
)

const UserInfo = (props: IAvatarProps) => (
  <div className="UserInfo">
    <Avatar user={props.user}/>
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  </div>
)

interface ICommentProps {
  author: {
    avatarUrl: string
    name: string
  }
  text: string
  date: Date
}

const Comment = (props: ICommentProps) => (
  <div className="Comment">
    <UserInfo user={props.author}/>
    <div className="Comment-text">
      {props.text}
    </div>
    <div className="Comment-date">
      {props.date.toLocaleDateString()}
    </div>
  </div>
)

export default class CommentComponent extends React.Component {
  render() {
    const props: ICommentProps = {
      author: {
        avatarUrl: 'https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg',
        name: 'alan'
      },
      text: 'react study',
      date: new Date(),
    }

    return <Comment author={props.author} text={props.text} date={props.date}/>
  }
}

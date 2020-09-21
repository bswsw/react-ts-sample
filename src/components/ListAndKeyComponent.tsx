import React from "react";

type PostProps = {
  id: number
  title: string
  content: string
}

const Post = (props: PostProps) => (
  <div key={props.id}>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
  </div>
)

class Blog extends React.Component<{ posts: Array<PostProps> }> {
  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map(post =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    )

    const contents = this.props.posts.map(post => (
      <Post key={post.id} id={post.id} title={post.title} content={post.content}/>
    ))

    return (
      <div>
        {sidebar}
        {contents}
      </div>
    )
  }
}

const NumberListItem = (props: { value: number }) => <li>{props.value}</li>

const NumberList = (props: { numbers: Array<number> }) => (
  <ul>
    {
      props.numbers.map(number => (
        <NumberListItem value={number} key={number.toString()}/>
      ))
    }
  </ul>
)

export default class ListAndKeyComponent extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5]
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ]

    return (
      <div>
        <NumberList numbers={numbers}/>
        <Blog posts={posts}/>
      </div>
    )
  }
}

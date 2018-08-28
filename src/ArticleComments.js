import React, {Component} from 'react';

export default class ArticleComments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commentsIsOpen: false
    }
  }


  render() {
    const { getBody } = this;
    const { comments } = this.props;
    const { commentsIsOpen } = this.state;
    return (
      <div className='Comments'>
        <h3>
          Comments: 
          <button onClick = {this.toggleOpen}>
            {commentsIsOpen ? 'close' : 'open'}
          </button>
        </h3>
        <ul>
          {commentsIsOpen ? getBody(comments) : null}
        </ul>
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({
      commentsIsOpen: !this.state.commentsIsOpen
    })
  }

  getBody(comments) {
    return comments ? 
    comments.map(comment => 
    <li key={comment.id}>
      <h4>{comment.user}</h4>
      <p>{comment.text}</p>
    </li>)
    :
    <li>No comments ...</li>;
  }
};
import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  state = {
    IsOpen: false
  }


  render() {
    const { comments } = this.props;
    const { IsOpen } = this.state;

    return (
      <div className='Comments'>
        <button onClick = {this.toggleOpen}>
          {IsOpen ? 'hide comment' : 'show comment'}
        </button>
        {this.getBody(comments)}
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({
      IsOpen: !this.state.IsOpen
    })
  }

  getBody(comments) {
    if(!this.state.IsOpen) return null;
    if(!comments.length) return <p>No comments ...</p>;

    return (
      <ul>
        {comments.map(comment => <li key={comment.id}><Comment comment={comment}  /></li>)}
      </ul>
    )
  }
};
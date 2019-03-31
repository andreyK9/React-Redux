import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../AC';

const limits = {
  user: {
    MIN: 5,
    MAX: 15
  },
  text: {
    MIN: 20,
    MAX: 50
  }
}

class UserForm extends Component {
  static propTypes = {

  };

  state = {
    user: '',
    text: ''
  }

  render() {
    const { text } = this.state;
    const { value } = this.props;

    return (
      <div>
        <h3>Add comment:</h3>
        <form onSubmit={ this.addNewComment }>
          <label>Name:
            <input
              type="text"
              value={ value }
              onChange={ this.handleChange('user') } />
          </label>
          <br />
          <br />
          <label>
            Text:
            <input
              type="text"
              value={ text }
              onChange={ this.handleChange('text') } />
          </label>
          <div>
            <input type="submit" value="add comment" />
          </div>
        </form>
      </div>
    )
  }

  addNewComment = (evt) => {
    evt.preventDefault();

    const { user, text } = this.state
    const { id, createComment } = this.props

    const newComment = {
      text: text,
      user: user
    }

    this.setDefaultState()
    createComment(newComment, id)
  }

  setDefaultState = () => {
    this.setState({
      user: '',
      text: ''
    })
  }

  handleChange = property => evt => {
    const { value, style } = evt.target

    if (value.length > limits[property].MAX) return;

    style.borderColor = value.length < limits[property].MIN ? 'red' : null;

    this.props.onChange(value);
  }
}


export default connect(null, { createComment })(UserForm)
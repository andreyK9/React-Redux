import React, { Component } from 'react';
import PropTypes from 'prop-types'

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
    const { user, text } = this.state
    return (
      <div>
        <h3>Add comment:</h3>
        <div>Name:
          <input
            type="text"
            value={ user }
            onChange={ this.handleChange('user') } />
        </div>
        <br />
        Text:
        <div>
          <textarea
            name="comment"
            cols="28"
            rows="7"
            onChange={ this.handleChange('text') }
            value={ text } >
          </textarea>
        </div>
      </div>
    )
  }

  handleChange = property => evt => {
    const { value, style } = evt.target

    if (value.length > limits[property].MAX) return;

    style.borderColor = value.length < limits[property].MIN ?
      'red' : null;

    this.setState({
      [property]: value
    })
  }
}


export default UserForm
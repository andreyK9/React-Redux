import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import { Provider } from 'react-redux'
import store from '../store'

function Root(props) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  )
}

Root.propTypes = {

}

export default Root
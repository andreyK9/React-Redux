import React from 'react';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import Select from './Select';

filter.propTypes = {

}

export default function filter(props) {
  const { articles } = props
  return (
    <div>
      <Calendar />
      <Select articles={articles} />
    </div>
  )
}
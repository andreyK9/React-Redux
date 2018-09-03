import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeDateRange} from '../../../AC'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './style.css'

class Calendar extends Component {
  static propTypes = {

  };

  state = {
    selection: null,
  }



  handleDayClick = day => {
    const {changeDateRange, dateRange} = this.props
    const range = DateUtils.addDayToRange(day, dateRange);

    changeDateRange(range)
  }

    
  render() {
    const { from, to } = this.props.dateRange;
    const modifiers = { start: from, end: to };
    const selectedDate = 
      from && 
      to && 
      `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`
    return(
      <div className="RangeExample">
          <div>
            {selectedDate}
          </div>
          <DayPicker
            className="Selectable"
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick} />
        </div>
    )
  }
}
export default connect(({filters}) => ({
  dateRange: filters.dateRange
}), { changeDateRange } )(Calendar)
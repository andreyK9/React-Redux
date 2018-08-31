import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './style.css'

class Calendar extends Component {
  static propTypes = {

  };

  static defaultProps = {
    numberOfMonths: 2,
  };

  state = {
    selection: null,
    from: null,
    to: null
  }



  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick = () => {
    this.setState({
      from: null,
      to: null
    });
  }

  render() {
    const { from, to } = this.state;
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
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick} />
        </div>
    )
  }
}
export default Calendar
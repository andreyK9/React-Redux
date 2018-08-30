import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css'
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  static defaultProps = {
    numberOfMonths: 2,
  };

  state = {
    selection: null,
    from: undefined,
    to: undefined
  }

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick = () => {
    this.setState({
      from: undefined,
      to: undefined
    });
  }

  render() {
    const { selection, from, to } = this.state;
    const modifiers = { start: from, end: to };
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.is
    }))
    return(
      <div>
        {/* <UserForm /> */}
        {/* <Select
          multi
          options = {options} 
          value={selection} 
          onChange={this.changeSelection} /> */}
        <div className="RangeExample">
          <p>
            {!from && !to && 'Please select the first day.'}
            {from && !to && 'Please select the last day.'}
            {from &&
              to &&
              `Selected from ${from.toLocaleDateString()} to
                  ${to.toLocaleDateString()}`}{' '}
            {from &&
              to && (
                <button className="link" onClick={this.handleResetClick}>
                  Reset
                </button>
              )}
          </p>
          <DayPicker
            className="Selectable"
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick} />
           <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
        </div>
        <ArticleList 
          articles = {this.props.articles} />
      </div>
    )
  }

  changeSelection = selection => this.setState({selection})
}
export default App
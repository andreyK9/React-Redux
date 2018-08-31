import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Selected from 'react-select';
import 'react-select/dist/react-select.css';

class Select extends Component {
  static propTypes = {

  };

  state = {
    selection: null
  }

  render() {
    const { selection } = this.state;
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.is
    }))
    return(
      <div>
        <Selected
          multi
          options = {options} 
          value={selection} 
          onChange={this.changeSelection} />
      </div>
    )
  }

  changeSelection = selection => this.setState({selection})
}
export default Select
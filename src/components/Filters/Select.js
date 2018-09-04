import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeSelected} from '../../AC';
import Selected from 'react-select';
import 'react-select/dist/react-select.css';

class Select extends Component {
  static propTypes = {

  };

  render() {
    const { articles, selection } = this.props;
    const options = Object.keys(articles).map(id => ({
      label: articles[id].title,
      value: id
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

  changeSelection = selection => {
    const {changeSelected} = this.props
    const selectionId = selection.map(select => select.value)

    changeSelected(selectionId)
  }
}
export default connect(state => ({
  articles: state.articles,
  selection: state.filters.selected
}), { changeSelected } )(Select)
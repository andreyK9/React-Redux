import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeSelected} from '../../AC';
import {mapToArr} from '../../helpers'
import Selected from 'react-select';
import 'react-select/dist/react-select.css';

class Select extends Component {
  static propTypes = {

  };

  render() {
    const { articles, selection } = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
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
  articles: mapToArr(state.articles),
  selection: state.filters.selected
}), { changeSelected } )(Select)
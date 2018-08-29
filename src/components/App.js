import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css'

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
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
        <UserForm />
        <Select
          multi
          options = {options} 
          value={selection} 
          onChange={this.changeSelection} />
        <ArticleList 
          articles = {this.props.articles} />
      </div>
    )
  }

  changeSelection = selection => this.setState({selection})
}
export default App
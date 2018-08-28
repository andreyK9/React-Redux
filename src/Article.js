import React, { Component } from 'react';
import ArticleComments from './ArticleComments'

export default class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true
    }
  }
  
  render() {
    const { article } = this.props;
    const {isOpen} = this.state;
    
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {this.toggleOpen}>
        {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
        <ArticleComments comments={article.comments} />
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getBody() {
    const {article} = this.props;
    return this.state.isOpen ? 
    <section>{article.text}</section> 
    : 
    null;
  }
};


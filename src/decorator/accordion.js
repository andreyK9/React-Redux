import React from 'react'

export default Component => class Accordion extends React.Component {
  state = {
    openArticleId: this.props.defaultOpenId
  }

  render() {
    return <Component
            {...this.state}
            {...this.props}
            toggleOpenArticle={this.toggleOpenArticle} />
  }

  toggleOpenArticle = openArticleId => () => {
    this.setState({
      openArticleId: 
        this.state.openArticleId === openArticleId ?
          null 
          : 
          openArticleId
    })
  }
};
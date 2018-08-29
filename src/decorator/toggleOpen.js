import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => 
  class WrapperComponent extends ReactComponent {
    state = {
      isOpen: false,
      openArticleId: null
    }

    render() {
      return <OriginalComponent 
                {...this.props} 
                {...this.state} 
                toggleOpen={this.toggleOpen}
                toggleOpenArticle={this.toggleOpenArticle} />
    }

    toggleOpen = (evt) => {
      evt && evt.preventDefault && evt.preventDefault()
      this.setState({
        isOpen: !this.state.isOpen
      })
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
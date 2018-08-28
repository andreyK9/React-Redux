import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => 
  class WrapperComponent extends ReactComponent {
    state = {
      isOpen: true
    }

    render() {
      return <OriginalComponent 
                {...this.props} 
                {...this.state} 
                toggleOpen={this.toggleOpen} />
    }

    toggleOpen = (evt) => {
      evt && evt.preventDefault && evt.preventDefault()
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }
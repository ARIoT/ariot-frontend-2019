import React from 'react';
import './ScrollToTop.scss';

class ScrollingWrapper extends React.Component {
  state = { hasScrolled: false }

  componentDidMount() {
    this.scrollingWrapper.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if (this.scrollingWrapper.scrollTop > 100 && !this.state.hasScrolled) {
      this.setState({ hasScrolled: true })
    } else if (this.scrollingWrapper.scrollTop < 100 && this.state.hasScrolled) {
      this.setState({ hasScrolled: false })
    }
  }

  scrollToTop = () => {
    this.scrollingWrapper.scrollTop = 0
  }

  reference = id => ref => {
    this[id] = ref
  }

  render() {
    return (
      <React.Fragment>
        {this.state.hasScrolled && (
            <button 
                onClick={this.scrollToTop}
                className="c_button c_button--light-text scroll-to-top">
                Scroll to top
            </button>
        )}
        <ScrollingWrapperContainer ref={this.reference('scrollingWrapper')}>
          {this.props.children}
        </ScrollingWrapperContainer>
      </React.Fragment>
    )
  }
}

export default ScrollingWrapper


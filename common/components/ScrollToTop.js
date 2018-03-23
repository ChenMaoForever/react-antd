/**
 * Created by chenmao on 2017/11/13.
 */
import {Component} from 'react'
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}

export default ScrollToTop

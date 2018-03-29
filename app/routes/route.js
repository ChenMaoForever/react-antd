/**
 * Created by chenmao on 2017/6/28.
 */
import React, {PureComponent} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import ScrollToTop from '../../common/components/ScrollToTop'

/*
*实现按需加载文件
* */
import Bundle from '../views/bundle.js'

// 异步载入

const HomePage = () => (// 首页
  <Bundle load={() => import('../containers/homePageContainer')}>
    {(Component) => <Component />}
  </Bundle>
)

const walletPage = () => (// 首页
    <Bundle load={() => import('../views/wallet/wallet')}>
        {(Component) => <Component />}
    </Bundle>
)
const optionPage = () => (// 首页
    <Bundle load={() => import('../views/option/option')}>
        {(Component) => <Component />}
    </Bundle>
)
class RouteConfig extends PureComponent {
  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <ScrollToTop>
            <Route path={`/`} component={HomePage}></Route>
            <Route path={`/wallet`} component={walletPage}></Route>
            <Route path={`/option`} component={optionPage}></Route>
        </ScrollToTop>
      </Router>
    )
  }
}

export default RouteConfig

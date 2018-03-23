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

class RouteConfig extends PureComponent {
  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path={`/`} component={HomePage}></Route>
            <Redirect to={`/`} />
          </Switch>
        </ScrollToTop>
      </Router>
    )
  }
}

export default RouteConfig

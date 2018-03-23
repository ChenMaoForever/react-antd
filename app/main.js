/**
 * Created by chenmao on 2017/7/20.
 */
import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
/* 性能测试 */
// import Perf from 'react-addons-perf';
// window.Perf = Perf
import store from './store/store.js'
import Roots from './views/root'

ReactDom.render(
  <Provider store={store}>
    <Roots />
  </Provider>
  , document.getElementById('root'))

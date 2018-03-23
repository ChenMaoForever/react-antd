/**
 * Created by dell on 2017/11/13.
 */
import React, {Component} from 'react'
import RouteMap from '../routes/route'
import {LocaleProvider} from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
class Roots extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <RouteMap {...this.props}/>
      </LocaleProvider>
    )
  }
}
export default Roots

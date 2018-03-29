/**
 * Created by chenmao on 2017/7/6.
 */
import React, {PureComponent} from 'react'
import { Menu, Icon, Button } from 'antd'
import {Link,withRouter} from 'react-router-dom'
import './wallet.less'

class Wallet extends PureComponent {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log('props',this.props)
    }
    render() {
        return (
            <div  className="wallet">
                <Link to='/option'>点击跳转</Link>
            </div>
        )
    }
}
export default withRouter(Wallet);
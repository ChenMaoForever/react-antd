/**
 * Created by chenmao on 2017/7/6.
 */
import React, {PureComponent} from 'react'
import { Menu, Icon } from 'antd'
import {Link} from 'react-router-dom'
import './homePage.less'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
var key=['1']
export default class App extends PureComponent {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount() {

    }
    handleClick(e) {
      console.log('click ', e);
      key=[e.key];
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    render() {
      return (
        <div className="home">
          <Menu
            onClick={this.handleClick}
            style={{ width: 240 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            selectedKeys={key}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <MenuItemGroup key="g1" title="Item 1">
                <Menu.Item key="1"><Link to="/wallet">Option 1</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/option">Option 2</Link></Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      )
    }
}

import React from 'react'
import { Row, Col, Menu,Icon,Tabs,message,Form,Input,Button } from 'antd';
const FormItem = Form.Item
export default class Header extends React.Component{
    constructor(){
        super()
        this.state = {menuCurrent:'bank',
    }
    }
    handle = e=>{
        console.log(e)
        this.setState({
            menuCurrent:e.key
        })
    }
    render(){
        return(
            <header>
                <Row>
                    <Col span={3}>
                        <span className="iconfont icon-iconNews"></span>
                    </Col>
                    <Col span={20}>
                        <Menu onClick={this.handle} selectedKeys={[this.state.menuCurrent]} mode='horizontal'>
                            <Menu.Item key="bank">
                                <Icon type="bank"></Icon>
                            </Menu.Item>
                            <Menu.Item key="book">
                                <Icon type="book"></Icon>
                            </Menu.Item>
                            <Menu.Item key="apple">
                                <Icon type="apple"></Icon>
                            </Menu.Item>
                            <Menu.Item key="car">
                                <Icon type="car"></Icon>
                            </Menu.Item>
                            <Menu.Item key="cloud">
                                <Icon type="cloud"></Icon>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <h1>这是头部</h1>
            </header>
        )
    }
}
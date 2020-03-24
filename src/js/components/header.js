import React,{ useState }from 'react'
import { Row, Col, Menu,Button,Modal} from 'antd';
import Icon from '@ant-design/icons'
import LoginForm from './login'
export const Header = () =>{
    const [menuCurrent, setCount] = useState('top');
    const [visible,setVisible] = useState(false)
    const [isHasLogin, setLogin] = useState(false);
    // this.state = {menuCurrent:'bank',
    // }
    const handle = (e)=>{
        console.log(e)
        setCount(e.key)
    }

    const toLogin =()=>{
        setVisible(true)
    }

    const closeLogin = (res)=>{
        console.log(res)
        setVisible(false)
    }

    const userShow = isHasLogin?
    <Menu.Item key="login">
        <Button type="primary" htmlType="button">个人中心</Button>
    </Menu.Item>
    :
    <Menu.Item key="register">
        <Button type="primary" htmlType="button" onClick={toLogin}>登陆/注册</Button>
    </Menu.Item>
        
    return (
        <header>
            <Row>
                <Col span={2}>
                    <span className="iconfont icon-iconNews"></span>
                </Col>
                <Col span={4}>
                    <a href="/" className="logo">
                        <img src={require('../../images/logo.png')} alt="logo"/>
                        <span>ReactNews</span>
                    </a>
                </Col>
                <Col span={16}>
                    <Menu onClick={handle} selectedKeys={[menuCurrent]} mode='horizontal'>
                        <Menu.Item key="top">
                            <Icon type="appstore"/>头条
                        </Menu.Item>
                        <Menu.Item key="shehui">
                            <Icon type="appstore"/>社会
                        </Menu.Item>
                        <Menu.Item key="guonei">
                            <Icon type="appstore"/>国内
                        </Menu.Item>
                        <Menu.Item key="guoji">
                            <Icon type="appstore"/>国际
                        </Menu.Item>
                        <Menu.Item key="yule">
                            <Icon type="appstore"/>娱乐
                        </Menu.Item>
                        <Menu.Item key="tiyu">
                            <Icon type="appstore"/>体育
                        </Menu.Item>
                        <Menu.Item key="keji">
                            <Icon type="appstore"/>科技
                        </Menu.Item>
                        <Menu.Item key="shishang">
                            <Icon type="appstore"/>时尚
                        </Menu.Item>
                        {userShow}
                    </Menu>
                    <Modal title="Basic Modal" visible={visible} onCancel={()=>{
                        setVisible(false)
                    }}>
                        <LoginForm closeLogin={closeLogin}></LoginForm>
                    </Modal>
                </Col>
                <Col span={2}></Col>
            </Row>
            <h1>这是头部</h1>
        </header>

        
    )   
}
import React from 'react'
import {Form,Input,Button,message} from 'antd';

export default (props)=> {

    const [forms] = Form.useForm();
    const handleSubmit = (e) =>{
	console.log(props)
		//页面开始向 API 进行提交数据
		// e.preventDefault();
		var myFetchOptions = {
            method: 'GET',
		};
		var formData= forms.getFieldsValue();
		console.log(formData);
		fetch('http://127.0.0.1:4000/artist/list?cat=1001&initial=b',myFetchOptions).
		then(response=>response.json()).then(json=>{
            console.log(json)
        });
        props.closeLogin(formData)
		message.success("请求成功！");
		// this.setModalVisible(false);
    }
    
    return (
        <Form form={forms} layout='horizontal' onFinish={handleSubmit.bind(this)}>
            <Form.Item name="userName" label="账户">
                <Input placeholder="请输入您的账号"/>
            </Form.Item>
            <Form.Item name="password" label="密码">
                <Input type="password" placeholder="请输入您的密码"/>
            </Form.Item>
            <Form.Item name="confirmPassword" label="确认密码">
                <Input type="password" placeholder="请再次输入您的密码"/>
            </Form.Item>
            <Button type="primary" htmlType="submit" >注册</Button>
        </Form>
    )
}
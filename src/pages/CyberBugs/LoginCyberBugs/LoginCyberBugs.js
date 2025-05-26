import React from 'react';
import { Button, Checkbox, Form, Input, Row, Divider } from 'antd';

import {
    GooglePlusOutlined,
    FacebookOutlined
} from '@ant-design/icons';

export default function LoginCyberBugs() {

    function handleFinish(value) {
        // executeLogin({
        //     data: value,
        // });
        console.log(value.username);
        console.log(value.password)

    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{
                maxWidth: 600, border: '1px solid #d9d9d9', // Màu viền mặc định của antd
                borderRadius: '8px', // Bo góc
                padding: '24px', // Khoảng cách nội dung với viền
            }}
            initialValues={{ remember: true }}
            onFinish={handleFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"

        >
            <h2 style={{ textAlign: 'center' }}>Đăng nhập</h2>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>

            <Divider>Or Login With</Divider>

            <Row style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <GooglePlusOutlined style={{ fontSize: '35px', color: '#08c', marginRight: '20px' }} />
                <h3></h3>
                <FacebookOutlined style={{ fontSize: '35px', color: '#08c' }} />
            </Row>
        </Form>
    )
}

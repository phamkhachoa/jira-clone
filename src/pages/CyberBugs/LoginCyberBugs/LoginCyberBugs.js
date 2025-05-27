import React from 'react';
import { Button, Checkbox, Form, Input, Row, Divider } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    GooglePlusOutlined,
    FacebookOutlined
} from '@ant-design/icons';
import { signinCyberbugAction } from '../../../redux/actions/CyberBugsActions';

export default function LoginCyberBugs(props) {

    const navigate = useNavigate()

    // Cach 2 su dung usrDispatch
    let dispatch = useDispatch();

    const doLogin = (value) => {
        console.log(value)
        // This action will be intercepted by Redux Saga
        dispatch(signinCyberbugAction(value.username, value.password, navigate))
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
            onFinish={doLogin}
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

// export default LoginCyberBugs;
// const mapFormikToProps

// Map state to props to get loading and error states
// const mapStateToProps = (state) => {
//     return {
//         user: state.user.user,
//         loading: state.user.loading,
//         error: state.user.error
//     }
// }


// Cach 1 su dung voi class component
// Map dispatch to props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         doLogin: (value) => {
//             console.log(value)
//             // This action will be intercepted by Redux Saga
//             dispatch(signinCyberbugAction(value.username, value.password))
//         }
//     }
// }

// export default connect(null, mapDispatchToProps)(LoginCyberBugs)

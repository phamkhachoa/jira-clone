import { Col, Layout, Row } from 'antd';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export const UserLoginTemplate = ({ children }) => {
    return (
        <Row
            style={{
                minHeight: '100vh', // Chiếm toàn bộ chiều cao màn hình
                background: '#f0f2f5' // Màu nền phụ
            }}
        >
            <Col
                span={12}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#f0f2f5'
                }}
            >
                <img
                    src='./img/bookingTicket/bgmovie.jpg'
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    alt="Background"
                />
            </Col>
            <Col
                span={12}
                style={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    padding: '20px'
                }}
            >
                <div style={{
                    width: '100%',
                    maxWidth: '400px' // Giới hạn chiều rộng form
                }}>
                    {children}
                </div>
            </Col>
        </Row>
    );
};
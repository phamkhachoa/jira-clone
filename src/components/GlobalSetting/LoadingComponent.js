import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { useSelector } from 'react-redux';

export default function LoadingComponent() {

    const { isLoading } = useSelector(state => state.stateLoading)

    if (!isLoading) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background mờ với opacity 0.5
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999, // Đảm bảo hiển thị trên cùng
        }}>
            <Flex align="center" gap="middle">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 48, color: '#fff' }} spin />} />
            </Flex>
        </div>
    );
}

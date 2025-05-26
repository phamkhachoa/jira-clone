import React, { Component } from 'react';

import { Button, Modal } from 'antd';

import { connect } from 'react-redux';
import { Space, Table, Tag } from 'antd';

class GioHangRedux extends Component {

    columns = [
        {
            title: 'Ten sản phẩm',
            dataIndex: 'tenSP',
            key: 'tenSP',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            render: url => <img src={url} style={{ width: 100, height: 100 }} />,
        }, {
            title: 'Giá Bán',
            dataIndex: 'gia',
            key: 'gia',
        }, {
            title: 'Số lượng',
            dataIndex: 'soLuong',
            key: 'gia',
        }];

    render() {
        let data = this.props.gioHang;
        return (
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={this.props.isModalOpen}
                onOk={this.props.showModal}
                onCancel={this.props.showModal}
            >
                <Table columns={this.columns} dataSource={data} />
            </Modal >
        )
    }
}

// Ham lay satet dexux bien doi thanh porps cua component

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(GioHangRedux)
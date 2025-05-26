import React, { Component } from 'react';
import GioHangRedux from './GioHangRedux';
import ProductListRedux from './ProductListRedux';
import { Typography, Badge, Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const { Title } = Typography;

class BaiTapGioHangRedux extends Component {
    state = {
        isModalOpen: false
    }

    showModal = () => {
        var newBol = !this.state.isModalOpen;
        this.setState({ isModalOpen: newBol })
    }

    render() {
        console.log(this.props.gioHang);
        let count = this.props.gioHang.length;
        return (
            <div>
                <h3>Danh sách sản phẩm</h3>
                <Title level={2} onClick={this.showModal}>
                    <Badge count={count} offset={[10, 0]}>
                        <ShoppingCartOutlined style={{ marginRight: 8 }} />
                        Giỏ hàng của bạn
                    </Badge>
                </Title>
                <ProductListRedux />

                <br />
                <GioHangRedux isModalOpen={this.state.isModalOpen} showModal={this.showModal} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(BaiTapGioHangRedux)
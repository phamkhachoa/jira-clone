import React, { Component } from 'react';
import { Card } from 'antd';
import { Button, Flex } from 'antd';
import { connect } from 'react-redux';

const { Meta } = Card;

class ProductItemRedux extends Component {
    render() {
        let { product } = this.props;
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product.hinhAnh} style={{ width: 240, height: 240 }} />}
            >
                <Meta title={product.tenSP} description={product.giaBan} />
                <br />
                <Button type="primary" onClick={() => { this.props.themGioHang(product) }}>Thêm sản phẩm</Button>
            </Card>
        )
    }
}

// Ham gui du lieu len store
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                gia: sanPham.giaBan
            }

            let action = {
                type: 'THEM_GIO_HANG',
                spGioHang
            }

            // DUng ham dispatch
            dispatch(action)
        }
    }
}


export default connect(null, mapDispatchToProps)(ProductItemRedux)

import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        var item = this.props.sanPhamProps
        var xemChiTiet = this.props.xemChiTiet
        return <div className="card text-left">
            <img className="card-img-top" src={item.hinhAnh} alt />
            <div className="card-body">
                <h4 className="card-title">{item.tenSP}</h4>
                <button className='btn btn-primary' onClick={() => {
                    xemChiTiet(item)
                }}>Xem chi tiet</button>
            </div>
        </div>
    }
}

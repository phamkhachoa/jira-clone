import React, { Component } from 'react'
import dataPhone from '../Data/dataPhone.json'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {

    mangSanPham = dataPhone;
    state = {
        sanPhamChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        }
    }

    xemChiTiet = (sp) => {
        this.state = {
            sanPhamChiTiet: sp
        }
        this.setState(this.state)
    }

    // renderSanPham = () => {
    //     return this.mangSanPham.map((item, index) => {
    //         return <div className='col-4'>
    //             <div className="card text-left">
    //                 <img className="card-img-top" src={item.hinhAnh} alt />
    //                 <div className="card-body">
    //                     <h4 className="card-title">{item.tenSP}</h4>
    //                     <button className='btn btn-primary' onClick={() => {
    //                         this.xemChiTiet(item)
    //                     }}>Xem chi tiet</button>
    //                 </div>
    //             </div>
    //         </div>

    //     })
    // }

    renderSanPham = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return <div className='col-4' key={index}>
                <SanPham sanPhamProps={sanPham} xemChiTiet={this.xemChiTiet} />
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='display-4 text-center'>DANH SÁCH SẢN PHẨM</h3>
                <div className='row'>
                    {this.renderSanPham()}
                </div>

                <div className='row mt-3'>
                    <div className='col-4'>
                        <h3 className='text-center'>{this.state.sanPhamChiTiet.tenSP}</h3>
                        <img src={this.state.sanPhamChiTiet.hinhAnh} style={{ width: '100%' }} />
                    </div>

                    <div className='col-8'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>
                                        Màn hình
                                    </th>
                                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                                </tr>

                                <tr>
                                    <th>
                                        Hệ điều hành
                                    </th>
                                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                                </tr>

                                <tr>
                                    <th>
                                        Camera trước
                                    </th>
                                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                                </tr>

                                <tr>
                                    <th>
                                        Camera sau
                                    </th>
                                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                                </tr>

                                <tr>
                                    <th>
                                        Ram
                                    </th>
                                    <td>{this.state.sanPhamChiTiet.ram}</td>
                                </tr>

                                <tr>
                                    <th>
                                        Rom
                                    </th>
                                    <td>{this.state.sanPhamChiTiet.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

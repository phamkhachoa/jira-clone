import React, { Component } from 'react'


export default class ProductList extends Component {


    renderProductItem = () => {
        console.log(this.props.arrProduct)
        return this.props.arrProduct?.map((item, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left mt-2">
                    <img className="card-img-top" src={item.image} alt />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.shortDescription}</p>
                        <button className='btn btn-dark'>View Detail</button>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            < div className='row'>
                {this.renderProductItem()}
            </div >
        )
    }
}

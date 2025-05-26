import React, { Component } from 'react'
import Child from './Child'
import ChildRFC from './ChildRFC'

export default class Parent extends Component {

    src = "https://gcp-cdn.vinhomes.vn/cms-data/styles/images_870_x_530/public/2023_04/PC18_OP2_Ph%E1%BB%91%20%C4%91i%20b%E1%BB%99%20K%C4%90AS_1681115453.jpg?itok=1x61gTyo"

    render() {
        return (
            <div>
                <Child propSource={this.src} />
                <ChildRFC propSource={this.src} />
            </div>
        )
    }
}

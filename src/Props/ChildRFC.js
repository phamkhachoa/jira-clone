import React from 'react'

export default function ChildRFC(props) {
    return (
        <div>
            <div className="card text-left">
                <img className="card-img-top" src={props.propSource} style={{ width: 300 }} alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>

        </div>
    )
}

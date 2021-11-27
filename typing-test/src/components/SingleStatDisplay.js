import React from 'react'
import "../stylesheets/SingleStatDisplay.css"

const SingleStatDisplay = ({title, data}) => {
    return (
        <div className="ssd-base">
            <div className="title">
                {title}
            </div>
            <div className="data">
                {data}
            </div>
        </div>
    )
}

export default SingleStatDisplay

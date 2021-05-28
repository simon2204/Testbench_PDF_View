import React from 'react'
import './DescriptionItem.css'

function DescriptionItem(props) {
    return (
        <div className="description-item">
            <span className="title">{props.title}:</span>
            <span>{props.children}</span>
        </div>
    )
}

export default DescriptionItem;

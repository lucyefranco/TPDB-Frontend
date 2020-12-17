import React from 'react'

const AttractionDetails = (props) => {
    return (
        <div className="showProps">
            <div className="showDetails">
                <h5> Type: { props.type } </h5>
                <h5> Opening Date: { props.openingDate } </h5>
            </div>
            <div className="showAbout">
                <h4>About</h4>
                <p> { props.about } </p>
            </div>
        </div>
    )
}

export default AttractionDetails
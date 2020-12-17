import React from 'react'

const AttractionDetails = (props) => {
    return (
        <div>
            <div className="showDetails">
                <h5> { props.type } </h5>
                <h5> { props.openingDate } </h5>
            </div>

            <h4>About</h4>
            <p> { props.about } </p>
        </div>
    )
}

export default AttractionDetails
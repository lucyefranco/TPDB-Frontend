import React from 'react'

const AttachedAttractions = (props) => {
    return (
        <div>
            <h1> { props.name } </h1>
            <h3> { props.type } </h3>
            <h3> { props.openingDate } </h3>
            <h3>About</h3>
            <p> { props.about } </p>
        </div>
    )
}

export default AttachedAttractions

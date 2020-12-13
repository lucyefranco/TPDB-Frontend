import React from 'react'

const CreativeDetails = (props) => {
    return (
        <div>
            <h1> { props.name } </h1>
            <h3>About</h3>
            <p> { props.about } </p>
        </div>
    )
}

export default CreativeDetails
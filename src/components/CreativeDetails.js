import React from 'react'

const CreativeDetails = (props) => {
    return (
        <div className="showProps">
            <div className="showAbout">
                <h4>About</h4>
                <p> { props.about } </p>
            </div>
        </div>
    )
}

export default CreativeDetails
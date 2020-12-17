import React from 'react'

const ThemeParkDetails = (props) => {
    return (
        <div className="showProps">
            <div className="showDetails">
                <h5> Opening Date: { props.openingDate } </h5>
                <h5> Operating Company: { props.operatingCompany } </h5>
                <h5> { props.city }, { props.state }, { props.country } </h5>
                <h5> { props.website } </h5>
            </div>
            <div className="showAbout">
                <h3>About</h3>
                <p> { props.about } </p>
            </div>
        </div>
    )
}

export default ThemeParkDetails
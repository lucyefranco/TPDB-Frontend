import React from 'react'

const ThemeParkDetails = (props) => {
    return (
        <div>
            <h1> { props.name } </h1>
            <h3> { props.openingDate } </h3>
            <h3> { props.operatingCompany } </h3>
            <h3> { props.city }, { props.state }, { props.country } </h3>
            <h3> { props.website } </h3>
            <h3>About</h3>
            <p> { props.about } </p>
        </div>
    )
}

export default ThemeParkDetails
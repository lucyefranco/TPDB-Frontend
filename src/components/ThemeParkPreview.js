import React from 'react'
import { Link } from 'react-router-dom'

const ThemeParkPreview = (props) => {
    return (
        <div>
            <Link to={ `/themeParks/${props.id}`} className="seeMoreLink"> <h4> { props.name } </h4> </Link>
            <h5> { props.city }, { props.state }, { props.country } </h5>
        </div>
    )
}

export default ThemeParkPreview
import React from 'react'

const ThemeParkPreview = (props) => {
    return (
        <div>
            <h4> { props.name } </h4>
            <h5> { props.city }, { props.state }, { props.country } </h5>
        </div>
    )
}

export default ThemeParkPreview
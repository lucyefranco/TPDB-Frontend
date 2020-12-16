import React from 'react'

const DisplayFavorites = (props) => {
    return (
        <div>
            <h5> { props.attractionName } </h5>
            <h5> { props.themeParkName } </h5>
            <h5> { props.creativeName }</h5>
        </div>
    )
}

export default DisplayFavorites
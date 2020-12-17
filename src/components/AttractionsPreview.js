import React from 'react'
import { Link } from 'react-router-dom'

const AttractionsPreview = (props) => {
    return (
        <div >
            <Link to={ `/attractions/${props.id}` } className="seeMoreLink"><h4> { props.name } </h4> </Link>
            <h5> Type: { props.type } </h5>
        </div>
    )
}

export default AttractionsPreview
import React from 'react'
import { Link } from 'react-router-dom'

const CreativePreview = (props) => {
    return (
        <div>
            <Link to={ `/creatives/${props.id}` } className="seeMoreLink"><h4> { props.name } </h4></Link>
        </div>
    )
}

export default CreativePreview
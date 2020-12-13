import React, { Component } from 'react'
import CreativesModel from '../models/creatives'
// import AttractionDetails from '../components/AttractionDetails'

class CreativeShow extends Component {
    state = {
        creativeId: this.props.match.params.id,
        // attractionInfo: {}
    }

    componentDidMount() {
        this.fetchCreativesData()
    }

    fetchCreativesData = () => {
        CreativesModel.show(this.state.creativeId).then(data => {
            console.log(data)
            // this.setState({ attractionInfo: data.attraction[0]})
        })
    }

    render() {
        // console.log(this.setState.attractionInfo)
        return (
        <div>
            <h1>Welcome to the Creative Show Page!</h1>
            {/* <AttractionDetails {...this.state.attractionInfo} /> */}
        </div>
        )
    }
}

export default CreativeShow
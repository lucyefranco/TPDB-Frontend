import React, { Component } from 'react'
import AttractionsModel from '../models/attractions'
import AttractionDetails from '../components/AttractionDetails'

class AttractionShow extends Component {
    state = {
        attractionId: this.props.match.params.id,
        attractionInfo: {}
    }

    componentDidMount() {
        this.fetchAttractionData()
    }

    fetchAttractionData = () => {
        AttractionsModel.show(this.state.attractionId).then(data => {
            console.log(data.attraction[0])
            this.setState({ attractionInfo: data.attraction[0]})
        })
    }

    //get connected creatives
    fetchConnectedCreatives = () => {
        
    }

    //use project work model to find byAttraction
    //whichever ids come out... put those into creative model
    //display results from creative model

    render() {
        console.log(this.setState.attractionInfo)
        return (
        <div>
            <h1>Welcome to the Attraction Show Page!</h1>
            <AttractionDetails {...this.state.attractionInfo} />
        </div>
        )
    }
}

export default AttractionShow
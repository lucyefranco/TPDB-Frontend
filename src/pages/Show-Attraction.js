import React, { Component } from 'react'
import AttractionsModel from '../models/attractions'
import ProjectWorksModel from '../models/projectWorks'
import AttractionDetails from '../components/AttractionDetails'
import CreativesModel from '../models/creatives'

class AttractionShow extends Component {
    state = {
        attractionId: this.props.match.params.id,
        attractionInfo: {},
        connectedCreativesIds: []
    }

    componentDidMount() {
        this.fetchAttractionData()
        this.fetchConnectedCreatives()
    }

    fetchAttractionData = () => {
        AttractionsModel.show(this.state.attractionId).then(data => {
            console.log(data.attraction[0])
            this.setState({ attractionInfo: data.attraction[0]})
        })
    }

    //get connected creatives
    fetchConnectedCreatives = () => {
        ProjectWorksModel.byAttraction(this.props.match.params.id).then(data => {
            console.log(data.attraction)
            this.setState({ connectedCreativesIds: data.attraction})
        })
        this.fetchCreatives()
    }

    fetchCreatives = () => {
        console.log(this.state.connectedCreativesIds)
        
    }
    //use project work model to find byAttraction
    //whichever ids come out... put those into creative model
    //display results from creative model

    // ADMIN ABILITIES
        // edit entry

    render() {
        
        // let attractionsList = this.state.attractions && this.state.attractions.map((attraction, index) => {
        //     return (
        //         <div>
        //         <AttachedAttractions { ...attraction } key={ index } />
        //         <Link to={ `/attraction/${ attraction.id}` } >Read More</Link>
        //         </div>
        //     )
        // })

        return (
        <div>
            <h1>Welcome to the Attraction Show Page!</h1>
            <AttractionDetails {...this.state.attractionInfo} />
        </div>
        )
    }
}

export default AttractionShow
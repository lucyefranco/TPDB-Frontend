import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AttractionsModel from '../models/attractions'
import AttractionsPreview from '../components/AttractionsPreview'

class ViewAttractions extends Component {
    state = {
        attractions: [],
    }

    componentDidMount() {
        this.fetchAttractions()
    }

    fetchAttractions = () => {
        AttractionsModel.all().then(data => {
            console.log(data)
            this.setState( { attractions: data.attractions })
        })
    }

    render() {
        let attractionsList = this.state.attractions && this.state.attractions.map((attraction, index) => {
            return (
                <div key={ index } className="previewCard">
                    <AttractionsPreview { ...attraction } />
                </div>
            )
        })
        return (
            <div>
                <h2> Attractions </h2>
                { this.state.attractions ? attractionsList : 'Loading...' }
            </div>
        )
    }

}

export default ViewAttractions;
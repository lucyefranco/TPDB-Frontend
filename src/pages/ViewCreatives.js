import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CreativesModel from '../models/creatives'
import CreativePreview from '../components/CreativePreview'

class ViewThemeParks extends Component {
    state = {
        creatives: [],
    }

    componentDidMount() {
        this.fetchCreativeData()
    }

    fetchCreativeData = () => {
        CreativesModel.all().then(data => {
            console.log(data.creatives)
            this.setState({ creatives: data.creatives})
        })
    }

    render() {
        let creativesList = this.state.creatives && this.state.creatives.map((creative, index) => {
            return (
                <div key={ index } className="previewCard">
                    <CreativePreview { ...creative } />
                </div>
            )
        })
        return (
            <div>
                <h2> Creatives </h2>
                { this.state.creatives ? creativesList : 'Loading...' }
            </div>
        )
    }

}

export default ViewThemeParks;
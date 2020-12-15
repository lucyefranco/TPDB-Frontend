import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ThemeParksModel from '../models/themeParks'
import ThemeParkPreview from '../components/ThemeParkPreview'

class ViewThemeParks extends Component {
    state = {
        themeParks: [],
    }

    componentDidMount() {
        this.fetchParkData()
    }

    fetchParkData = () => {
        ThemeParksModel.all().then(data => {
            console.log(data)
            this.setState( { themeParks: data.themeParks })
        })
    }

    render() {
        let themeParksList = this.state.themeParks && this.state.themeParks.map((themeParks, index) => {
            return (
                <div key={ index }>
                    <ThemeParkPreview { ...themeParks } />
                    <Link to={ `/themeparks/${themeParks.id}` }>See More</Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Here's your list of theme parks</h1>
                { this.state.themeParks ? themeParksList : 'Loading...' }
            </div>
        )
    }

}

export default ViewThemeParks;

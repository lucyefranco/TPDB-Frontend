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
                <div key={ index } className="previewCard">
                    <ThemeParkPreview { ...themeParks } />
                </div>
            )
        })
        return (
            <div>
                <h2>Theme Parks</h2>
                { this.state.themeParks ? themeParksList : 'Loading...' }
            </div>
        )
    }

}

export default ViewThemeParks;

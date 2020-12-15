import React, { Component } from 'react'
import ThemeParksModel from '../models/themeParks'
import AttractionsModel from '../models/attractions'
import ThemeParkDetails from '../components/ThemeParkDetails'
import AttachedAttractions from '../components/AttachedAttractions'

class ThemeParkShow extends Component {
    state = {
        themeParkId: this.props.match.params.id,
        themeParkInfo: {},
        attractions: []
    }

    componentDidMount() {
        this.fetchThemeParksData()
        this.fetchAttachedAttractionData()
    }

    fetchThemeParksData = () => {
        ThemeParksModel.show(this.state.themeParkId).then(data => {
            console.log(data.themePark[0])
            this.setState({ themeParkInfo: data.themePark[0] })
        })
    }

    fetchAttachedAttractionData = () => {
        AttractionsModel.showByPark(this.state.themeParkId).then(data => {
            console.log(data.attractions)
            this.setState({ attractions: data.attractions })
        })
    }

    render() {
        console.log(this.state.attractions)
        let attractionsList = this.state.attractions && this.state.attractions.map((attraction, index) => {
            return (
                <AttachedAttractions { ...attraction } key={ index } />
            )
        })

        return (
        <div>
            <h1>Welcome to the Theme Park Show Page!</h1>
            <ThemeParkDetails {...this.state.themeParkInfo} />
            <div>
            <div>
                <button> remove </button>
                <button> edit </button>
            </div>
                <h2>Known Attractions</h2>
                { this.state.attractions ? attractionsList : "Loading.." }
            </div>
        </div>
        )
    }
}

export default ThemeParkShow
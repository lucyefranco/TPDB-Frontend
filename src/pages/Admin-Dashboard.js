import React, { Component } from 'react';
import NewThemeParkEntry from '../components/NewThemeParkEntry'
import ThemeParksModel from '../models/themeParks'
import AttractionsModel from '../models/attractions'
import CreativesModel from '../models/creatives'

class adminDashboard extends Component {
    state = {
        parkShow: false,
        attractionShow: false,
        attractions: [],
        creatives: [],
        themeParks: []
    }

    componentDidMount = () => {
        this.getAllAttractions()
        this.getAllCreatives()
        this.getAllThemeParks()
    }

    getAllAttractions = () => {
        AttractionsModel.all().then(data => {
            console.log(data.attractions)
            this.setState( { attractions: data.attractions })
        })
    }
    getAllCreatives = () => {
        CreativesModel.all().then(data => {
            console.log(data.creatives)
            this.setState({ creatives: data.creatives})
        })
    }
    getAllThemeParks = () => {
        ThemeParksModel.all().then(data => {
            console.log(data.themeParks)
            this.setState({ themeParks: data.themeParks })
        })
    }

    // Park Modal
    showParkModal = e => {
        this.setState({
            parkShow: !this.state.parkShow
        })
    }
    //create new park
    createNewPark = (name, city, state, country, website, operatingCompany, openingDate, status, about) => {
        let newPark = {
            name: name,
            city: city,
            state: state,
            country: country,
            website: website,
            operatingCompany: operatingCompany,
            openingDate: openingDate,
            status: status,
            about: about,
        }
        ThemeParksModel.create(newPark).then((res) => {
            console.log(newPark)
            this.getAllThemeParks()
        })
    }

    //create new creative
    //create new attraction

    render() {
        return (
            <div>
                <h1>Welcome to the Dashboard! </h1>
                <div>
                    <h3> { this.state.themeParks.length } Theme Parks</h3>
                    <h3> { this.state.attractions.length } Attractions</h3>
                    <h3> { this.state.creatives.length } Creatives</h3>
                </div>
                {/* THEME PARKS */}
                <button 
                onClick={ e => {this.showParkModal()}}
                > 
                Create a new Theme Park entry
                </button>
                <NewThemeParkEntry 
                    onClose={ this.showParkModal } 
                    parkShow={ this.state.parkShow} 
                    createNewPark={ this.createNewPark }/>
            </div>
        )
    }
}

export default adminDashboard;

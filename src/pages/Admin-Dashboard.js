import React, { Component } from 'react';
import NewThemeParkEntry from '../components/NewThemeParkEntry'
import ThemeParksModel from '../models/themeParks'

class adminDashboard extends Component {
    state = {
        parkShow: false,
        attractionShow: false,

    }

    //create new attraction

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
        })
    }

    //create new creative

    render() {
        return (
            <div>
                <h1>Welcome to the Dashboard! </h1>

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

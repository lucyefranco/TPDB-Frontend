import React, { Component } from 'react';
import NewThemeParkEntry from '../components/NewThemeParkEntry'
import ThemeParksModel from '../models/themeParks'
import AttractionsModel from '../models/attractions'
import CreativesModel from '../models/creatives'
import UserModel from '../models/user'

class adminDashboard extends Component {
    state = {
        userId: localStorage.getItem('id'),
        currentUser: {},
        parkShow: false,
        attractionShow: false,
        attractions: [],
        creatives: [],
        themeParks: [],
        users: []
    }

    componentDidMount = () => {
        this.getAllAttractions()
        this.getAllCreatives()
        this.getAllThemeParks()
        this.getAllUsers()
        this.getCurrentUser()
    }

    getCurrentUser = () => {
        console.log(this.state.userId)
        UserModel.show(this.state.userId).then(data => {
            this.setState( {currentUser: data.user[0]})
        })
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
    getAllUsers = () => {
        UserModel.all().then(data => {
            console.log(data.users)
            this.setState({ users: data.users })
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
                    { this.state.currentUser.admin ? 
                    <>
                    <h1>Welcome to the Admin Dashboard! </h1>
                    <div>
                        <h3> { this.state.themeParks.length } Theme Parks</h3>
                        <h3> { this.state.attractions.length } Attractions</h3>
                        <h3> { this.state.creatives.length } Creatives</h3>
                        <h3> { this.state.users.length } Users </h3>
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
                    </>
                    :
                    <>
                    <p> You do not have access to this page.</p>
                    </>
                    }

            </div>
        )
    }
}

export default adminDashboard;
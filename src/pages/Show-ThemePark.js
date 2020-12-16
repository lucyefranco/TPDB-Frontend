import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThemeParksModel from '../models/themeParks'
import AttractionsModel from '../models/attractions'
import ThemeParkDetails from '../components/ThemeParkDetails'
import AttachedAttractions from '../components/AttachedAttractions'
import NewAttractionEntry from '../components/NewAttractionEntry'
import UserModel from '../models/user'
import FavoritesModel from '../models/favorites'

class ThemeParkShow extends Component {
    state = {
        userId: localStorage.getItem('id'),
        currentUser: {},
        themeParkId: this.props.match.params.id,
        themeParkInfo: {},
        attractions: [],
        attractionShow: false,
        favorites: []
    }

    componentDidMount() {
        this.fetchThemeParksData()
        this.fetchAttachedAttractionData()
        this.getCurrentUser()
        this.getAllFavorites()
    }

    getCurrentUser = () => {
        UserModel.show(this.state.userId).then(data => {
            this.setState({ currentUser: data.user[0] })
        })
    }

    fetchThemeParksData = () => {
        ThemeParksModel.show(this.state.themeParkId).then(data => {
            console.log(data.themePark[0])
            this.setState({ themeParkInfo: data.themePark[0] })
        })
    }

    addToFavorites = () => {
        let newFavorite = {
            themeParkId: this.props.match.params.id,
            userId: localStorage.getItem('id'),
            themeParkName: this.state.themeParkInfo.name
        }
        FavoritesModel.createPark(newFavorite).then((res) => {
            console.log(newFavorite)
            this.getAllFavorites()
        })
    }

    getAllFavorites = () => {
        FavoritesModel.byPark(this.state.themeParkId).then(data => {
            console.log(data.themeParkFavorites)
            this.setState({favorites: data.themeParkFavorites})
        })
    }

    fetchAttachedAttractionData = () => {
        AttractionsModel.showByPark(this.state.themeParkId).then(data => {
            console.log(data.attractions)
            this.setState({ attractions: data.attractions })
        })
    }

    createNewAttraction = (name, type, openingDate, status, about) => {
        let newAttraction = {
            themeParkId: this.props.match.params.id,        
            name: name,
            type: type,
            openingDate: openingDate,
            status: status,
            about: about,
        }
        AttractionsModel.create(newAttraction).then((res) => {
            console.log('new attraction created')
            console.log(newAttraction)
            this.fetchAttachedAttractionData()
        })
    }

    showAttractionModal = e => {
        this.setState({
            attractionShow: !this.state.attractionShow
        })
    }

    render() {
        let attractionsList = this.state.attractions && this.state.attractions.map((attraction, index) => {
            return (
                <div>
                <AttachedAttractions { ...attraction } key={ index } />
                <Link to={ `/attraction/${ attraction.id}` } >Read More</Link>
                </div>
            )
        })

        return (
        <div>
            <h1>Welcome to the Theme Park Show Page!</h1>
            <ThemeParkDetails {...this.state.themeParkInfo} />
            <button
            onClick={ e => { this.addToFavorites() }}
            >Add to Favorites</button>
            <h3> { this.state.favorites.length } users have added this to their favorites</h3>
        <div>
            <div>
                { this.state.currentUser.admin ? 
                <>
                <button> edit </button>
                <div>
                    <NewAttractionEntry
                        onClose= { this.showAttractionModal}
                        showAttraction= { this.state.attractionShow }
                        createNewAttraction={ this.createNewAttraction }
                        />
                    <button onClick={e => {this.showAttractionModal()}}> add attraction </button>
                </div>
                </>
                :
                <></>
                }

            </div>
                <h2>Known Attractions</h2>
                { this.state.attractions ? attractionsList : "Loading.." }
            
            </div>
        </div>
        )
    }
}

export default ThemeParkShow
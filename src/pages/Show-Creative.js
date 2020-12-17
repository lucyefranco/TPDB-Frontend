import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreativesModel from '../models/creatives'
import CreativeDetails from '../components/CreativeDetails'
import AttachedAttractions from '../components/AttachedAttractions'
import UserModel from '../models/user'
import FavoritesModel from '../models/favorites'

class CreativeShow extends Component {
    state = {
        userId: localStorage.getItem('id'),
        currentUser: {},
        creativeId: this.props.match.params.id,
        creativeInfo: {},
        connectedAttractions: [],
        favorites: []
    }

    componentDidMount() {
        this.fetchCreativesData()
        this.fetchConnectedAttractions()
        this.getCurrentUser()
        this.getAllFavorites()
    }

    getCurrentUser = () => {
        UserModel.show(this.state.userId).then(data => {
            this.setState({ currentUser: data.user[0] })
        })
    }

    addToFavorites = () => {
        let newFavorite = {
            creativeId: this.props.match.params.id,
            userId: localStorage.getItem('id'),
            creativeName: this.state.creativeInfo.name
        }
        FavoritesModel.createCreative(newFavorite).then((res) => {
            console.log(newFavorite)
            this.getAllFavorites()
        })
    }

    getAllFavorites = () => {
        FavoritesModel.byCreative(this.state.creativeId).then(data => {
            console.log(data.creativeFavorites)
            this.setState({favorites: data.creativeFavorites})
        })
    }

    fetchCreativesData = () => {
        CreativesModel.show(this.state.creativeId).then(data => {
            console.log(data.creative[0])
            this.setState({ creativeInfo: data.creative[0]})
        })
    }

    // LINKED ATTRACTIONS
    fetchConnectedAttractions = () => {
        CreativesModel.showAttractions(this.state.creativeId).then(data => {
            console.log(data.linkedAttractions)
            this.setState({ connectedAttractions: data.linkedAttractions })
        })
    }

    // admin abilites
        // edit entry
        // link to existing attraction

    render() {
        let attractionsList = this.state.connectedAttractions && this.state.connectedAttractions.map((attraction, index) => {
            return (
                <div className="connections">
                    <AttachedAttractions { ...attraction } key={ index } />
                    <Link to={ `/attractions/${attraction.id}` } className="seeMoreLink" >Read More</Link>
                </div>
            )
        })
        return (
        <div>
            <h2> { this.state.creativeInfo.name } </h2>
            <div className="showFavorite">
            { this.state.userId ?
                    <>
                    <button
                    onClick={ e => { this.addToFavorites() }}
                    >Add to Favorites</button>
                    </>
                    :
                    <>
                        <p>Log in to save to your favorites!</p>
                    </>
                }
                <h5> { this.state.favorites.length } users have added this to their favorites</h5>
            </div>

            <CreativeDetails {...this.state.creativeInfo} />

            { this.state.currentUser.admin ?
            <>
                <button>Edit</button>
                <button>Add Connected Attraction</button>
            </>
            :
            <>
            </>
            }
            <h4>Connected Attractions</h4>
            { this.state.connectedAttractions ? attractionsList : "No attractions connected to this creative." }
        </div>
        )
    }
}

export default CreativeShow
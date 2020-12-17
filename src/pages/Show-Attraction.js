import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AttractionsModel from '../models/attractions'
import UserModel from '../models/user'
import AttractionDetails from '../components/AttractionDetails'
import AttachedCreatives from '../components/AttachedCreatives'
import FavoritesModel from '../models/favorites'


class AttractionShow extends Component {
    state = {
        userId: localStorage.getItem('id'),
        currentUser: {},
        attractionId: this.props.match.params.id,
        attractionInfo: {},
        connectedCreatives: [],
        favorites: []
    }

    componentDidMount() {
        this.fetchAttractionData()
        this.fetchConnectedCreatives()
        this.getAllFavorites()
    }

    getCurrentUser = () => {
        UserModel.show(this.state.userId).then(data => {
            console.log(data.user[0])
            this.setState({ currentUser: data.user[0] })
        })
    }

    fetchAttractionData = () => {
        AttractionsModel.show(this.state.attractionId).then(data => {
            console.log(data.attraction[0])
            this.setState({ attractionInfo: data.attraction[0]})
        })
    }
    //get connected creatives
    fetchConnectedCreatives = () => {
        AttractionsModel.showCreatives(this.state.attractionId).then(data => {
            console.log(data.linkedCreatives)
            this.setState({ connectedCreatives: data.linkedCreatives})
        })
    }

    addToFavorites = () => {
        let newFavorite = {
            attractionId: this.props.match.params.id,
            userId: localStorage.getItem('id'),
            attractionName: this.state.attractionInfo.name
        }
        FavoritesModel.createAttraction(newFavorite).then((res) => {
            console.log(newFavorite)
            // this.getAllFavorites
        })
    }

    getAllFavorites = () => {
        FavoritesModel.byAttraction(this.state.attractionId).then(data => {
            console.log(data.attractionFavorites)
            this.setState({favorites: data.attractionFavorites})
        })
    }

    // ADMIN ABILITIES
        // edit entry
        // link to existing creative

    render() {
        
        let creativesList = this.state.connectedCreatives && this.state.connectedCreatives.map((creative, index) => {
            return (
                <div>
                    <AttachedCreatives { ...creative } key={ index } />
                    <Link to={ `/creatives/${creative.id}` } >Read More</Link>
                </div>
            )
        })

        return (
        <div>
            <h2> {this.state.attractionInfo.name}</h2>
            { this.state.currentUser ?
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
            <div className="showFavorite">

                <h5> { this.state.favorites.length } users have added this to their favorites</h5>
            </div>

            <AttractionDetails {...this.state.attractionInfo} />
            { this.state.currentUser.admin ?
            <>
            
            </>
            :
            <>
            <button>Edit</button>
            </>
            }
            
            
            <h2>Connected Creatives: </h2>
            { this.state.connectedCreatives ? creativesList : "Loading.." }
        </div>
            
        )
    }
}

export default AttractionShow
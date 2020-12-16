import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import FavoritesModel from '../models/favorites'
import DisplayFavorites from '../components/DisplayFavorites'

class Profile extends Component {
  state = {
    userId: localStorage.getItem('id'),
    favoriteAttractions: [],
    favoriteParks: [],
    favoriteCreatives: []
  }

  componentDidMount() {
    this.findFavoriteAttractions()
    this.findFavoriteParks()
    this.findFavoriteCreatives()
  }

  findFavoriteAttractions = () => {
    FavoritesModel.userAttractions(this.state.userId).then(data => {
      this.setState({ favoriteAttractions: data.attractionFavorites})
    })
  }
  findFavoriteParks = () => {
    FavoritesModel.userParks(this.state.userId).then(data => {
      console.log(data)
      this.setState({ favoriteParks: data.themeParkFavorites })
    })
  }
  findFavoriteCreatives = () => {
    FavoritesModel.userCreatives(this.state.userId).then(data => {
      console.log(data)
      this.setState({ favoriteCreatives: data.creativeFavorites })
    })
  }

  render () {
    let attractionsList = this.state.favoriteAttractions && this.state.favoriteAttractions.map((attraction, index) => {
      return (
          <div>
              <DisplayFavorites { ...attraction } key={ index } />
              <Link to={ `/attractions/${attraction.attractionId}` } >Read More</Link>
          </div>
      )
    })

    let parksList = this.state.favoriteParks && this.state.favoriteParks.map((park, index) => {
      return (
          <div>
              <DisplayFavorites { ...park } key={ index } />
              <Link to={ `/themeParks/${park.themeParkId}` } >Read More</Link>
          </div>
      )
    })

    let creativesList = this.state.favoriteCreatives && this.state.favoriteCreatives.map((creative, index) => {
      return (
          <div>
              <DisplayFavorites { ...creative} key={ index } />
              <Link to={ `/creatives/${creative.creativeId}` } >Read More</Link>
          </div>
      )
    })

    return (
      <div>
      <h1>Welcome to your profile</h1>
        <div>
          <h4>Your Favorite Attractions</h4>
          { this.state.favoriteAttractions ? attractionsList : "You have not favorited any attraction!" }
        </div>
        <div>
          <h4>Your Favorite Theme Parks</h4>
          { this.state.favoriteParks ? parksList : "You have not favorited any Theme Parks!" }
        </div>
        <div>
        <h4>Your Favorite Creatives</h4>
          { this.state.favoriteCreatives ? creativesList : "You have not favorited any Creatives!" }
        </div>
      </div>
    )
  }
}

export default Profile
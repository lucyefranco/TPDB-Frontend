import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreativesModel from '../models/creatives'
import CreativeDetails from '../components/CreativeDetails'
import AttachedAttractions from '../components/AttachedAttractions'
import UserModel from '../models/user'

class CreativeShow extends Component {
    state = {
        userId: localStorage.getItem('id'),
        currentUser: {},
        creativeId: this.props.match.params.id,
        creativeInfo: {},
        connectedAttractions: []
    }

    componentDidMount() {
        this.fetchCreativesData()
        this.fetchConnectedAttractions()
        this.getCurrentUser()
    }

    getCurrentUser = () => {
        UserModel.show(this.state.userId).then(data => {
            this.setState({ currentUser: data.user[0] })
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
        console.log(this.setState.creativeInfo)
        let attractionsList = this.state.connectedAttractions && this.state.connectedAttractions.map((attraction, index) => {
            return (
                <div>
                    <AttachedAttractions { ...attraction } key={ index } />
                    <Link to={ `/attractions/${attraction.id}` } >Read More</Link>
                </div>
            )
        })
        return (
        <div>
            <h1>Welcome to the Creative Show Page!</h1>
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
            <h2>Connected Attractions</h2>
            { this.state.connectedAttractions ? attractionsList : "Loading.." }
        </div>
        )
    }
}

export default CreativeShow
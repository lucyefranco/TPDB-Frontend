import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AttractionsModel from '../models/attractions'
import UserModel from '../models/user'
import AttractionDetails from '../components/AttractionDetails'
import AttachedCreatives from '../components/AttachedCreatives'


class AttractionShow extends Component {
    state = {
        userId: localStorage.getItem('id'),
        currentUser: {},
        attractionId: this.props.match.params.id,
        attractionInfo: {},
        connectedCreatives: []
    }

    componentDidMount() {
        this.fetchAttractionData()
        this.fetchConnectedCreatives()
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
            <h1>Welcome to the Attraction Show Page!</h1>
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
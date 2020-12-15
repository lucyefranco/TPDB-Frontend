import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThemeParksModel from '../models/themeParks'
import AttractionsModel from '../models/attractions'
import ThemeParkDetails from '../components/ThemeParkDetails'
import AttachedAttractions from '../components/AttachedAttractions'
import NewAttractionEntry from '../components/NewAttractionEntry'

class ThemeParkShow extends Component {
    state = {
        themeParkId: this.props.match.params.id,
        themeParkInfo: {},
        attractions: [],
        attractionShow: false
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
        <div>
            <div>
                <h5>ADMIN ONLY</h5>
                <button> remove </button>
                <button> edit </button>
            </div>
                <h2>Known Attractions</h2>
                { this.state.attractions ? attractionsList : "Loading.." }
                <div>
                    <h5>ADMIN ONLY</h5>
                    <NewAttractionEntry
                        onClose= { this.showAttractionModal}
                        showAttraction= { this.state.attractionShow }
                        createNewAttraction={ this.createNewAttraction }
                        />
                    <button onClick={e => {this.showAttractionModal()}}> add attraction </button>
                </div>
            </div>
        </div>
        )
    }
}

export default ThemeParkShow
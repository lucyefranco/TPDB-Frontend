import React, { Component } from 'react'
import CreativesModel from '../models/creatives'
import CreativeDetails from '../components/CreativeDetails'

class CreativeShow extends Component {
    state = {
        creativeId: this.props.match.params.id,
        creativeInfo: {}
    }

    componentDidMount() {
        this.fetchCreativesData()
    }

    fetchCreativesData = () => {
        CreativesModel.show(this.state.creativeId).then(data => {
            console.log(data.creative[0])
            this.setState({ creativeInfo: data.creative[0]})
        })
    }

    render() {
        console.log(this.setState.creativeInfo)
        return (
        <div>
            <h1>Welcome to the Creative Show Page!</h1>
            <CreativeDetails {...this.state.creativeInfo} />
        </div>
        )
    }
}

export default CreativeShow
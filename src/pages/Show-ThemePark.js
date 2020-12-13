import React, { Component } from 'react'
import ThemeParksModel from '../models/themeParks'
import ThemeParkDetails from '../components/ThemeParkDetails'

class ThemeParkShow extends Component {
    state = {
        themeParkId: this.props.match.params.id,
        themeParkInfo: {}
    }

    componentDidMount() {
        this.fetchThemeParksData()
    }

    fetchThemeParksData = () => {
        ThemeParksModel.show(this.state.themeParkId).then(data => {
            console.log(data.themePark[0])
            this.setState({ themeParkInfo: data.themePark[0]})
        })
    }

    render() {
        return (
        <div>
            <h1>Welcome to the Theme Park Show Page!</h1>
            <ThemeParkDetails {...this.state.themeParkInfo} />
        </div>
        )
    }
}

export default ThemeParkShow
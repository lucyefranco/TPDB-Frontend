import React, { Component } from 'react'

class NewThemeParkEntry extends Component {
    state = {
        name: '',
        about: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPost(
            this.state.rating, 
            this.state.comment,
        )
        this.props.onClose()
    }

    render () {
        if(!this.props.show) {
            return null
        }

        return (
            <div>
                <div>
                    {/* <button onClick={ this.props.onClose } className="closeButton">
                        Close
                    </button> */}
                </div>
                <h3>Submit a New Attraction</h3>
                <div>
                    <form className="themeParkEntryForm" onSubmit={ this.handleSubmit }>
                        <div>
                            <label>Name: </label>
                            <input                 
                                name = "name"
                                placeholder="name"
                                type="text"
                                onChange={ (e) => {
                                    this.setState({ name: e.target.value })
                                }}
                                value= { this.state.name }
                            >
                            </input>
                            <label>City: </label>
                            <input
                                name = "city"
                                placeholder="city"
                                type="text"
                                onChange={ (e) => {
                                    this.setState({ city: e.target.value })
                                }}
                                value= { this.state.city }
                            >
                            </input>
                            <label>State: </label>
                            <input
                                name = "state"
                                placeholder="state"
                                type="text"
                                onChange={ (e) => {
                                    this.setState({ state: e.target.value })
                                }}
                                value= { this.state.state }
                            >
                            </input>
                            <label>Country: </label>
                            <input
                                name = "country"
                                placeholder="country"
                                type="text"
                                onChange={ (e) => {
                                    this.setState({ country: e.target.value })
                                }}
                                value= { this.state.country }
                            >
                            </input>
                            <label>Website: </label>
                            <input
                                name = "website"
                                placeholder="website"
                                type="text"
                                onChange={ (e) => {
                                    this.setState({ website: e.target.value })
                                }}
                                value= { this.state.website }
                            >
                            </input>
                            <label>Operating Company: </label>
                            <input
                                name = "operatingCompany"
                                placeholder="operating company"
                                type="text"
                                onChange={ (e) => {
                                    this.setState({ operatingCompany: e.target.value })
                                }}
                                value= { this.state.operatingCompany }
                            >
                            </input>
                            <label>Opening Date: </label>
                            <input
                                name = "openingDate"
                                placeholder="YYYY-MM-DD"
                                type="date"
                                onChange={ (e) => {
                                    this.setState({ website: e.target.value })
                                }}
                                value= { this.state.website }
                            >
                            </input>
                        </div>
                        <br/>
                        <label>Comment:</label>
                        <br/>
                        <textarea className="commentInput"
                            name = "about"
                            placeholder="about"
                            type="text"
                            onChange={ (e) => {
                                this.setState({ about: e.target.value })
                            }}
                            value= { this.state.comment }
                        />
                        <br/>
                        <button className="submitBtn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewThemeParkEntry

// name: DataTypes.STRING,
// city: DataTypes.STRING,
// state: DataTypes.STRING,
// country: DataTypes.STRING,
// website: DataTypes.STRING,
// operatingCompany: DataTypes.STRING,
// openingDate: DataTypes.DATEONLY,
// status: DataTypes.BOOLEAN,
// about: DataTypes.TEXT
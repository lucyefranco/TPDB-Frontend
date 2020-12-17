import React, { Component } from 'react'

class NewThemeParkEntry extends Component {
    state = {
        name: '',
        city: '',
        state: '',
        country: '',
        website: '',
        operatingCompany: '',
        openingDate: '',
        status: true,
        about: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit works')
        this.props.createNewPark(
            this.state.name, 
            this.state.city,
            this.state.state,
            this.state.country,
            this.state.website, 
            this.state.operatingCompany,
            this.state.openingDate,
            this.state.status, 
            this.state.about, 
        )
        this.props.onClose()
    }

    render () {
        if(!this.props.parkShow) {
            return null
        }

        return (
            <div className="newEntry">
                <div>
                    <button onClick={ this.props.onClose } className="closeButton">
                        Close
                    </button>
                </div>
                <h5>Submit a New Theme Park</h5>
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
                            <label>Opening Date: </label>
                            <input
                                name = "openingDate"
                                placeholder="YYYY-MM-DD"
                                type="date"
                                onChange={ (e) => {
                                    this.setState({ openingDate: e.target.value })
                                }}
                                value= { this.state.openingDate }
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
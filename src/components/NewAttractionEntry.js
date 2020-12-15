import React, { Component } from 'react'

class NewAttractionEntry extends Component {
    state = {
        name: '',
        type: '',
        openingDate: '',
        status: '',
        about: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPost(
            this.state.name, 
            this.state.type,
            this.state.openingDate,
            this.state.status,
            this.state.about
        )
        // this.props.onClose()
    }

    render () {
        // if(!this.props.show) {
        //     return null
        // }

        return (
            <div>
                <div>
                    {/* <button onClick={ this.props.onClose } className="closeButton">
                        Close
                    </button> */}
                </div>
                <h3>Submit a New Attraction</h3>
                <div>
                    <form className="attractionEntryForm" onSubmit={ this.handleSubmit }>
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
                            <label>Type: </label>
                            <select
                                name = "type"
                                placeholder="type"
                                type="text"
                                onChange={ (e) => {
                                    this.setState({ type: e.target.value })
                                }}
                                value= { this.state.type }
                            >
                                <option value="ride"> Ride </option>
                                <option value="show"> Show </option>
                                <option value="nighttime spectacular"> Nighttime Spectacular </option>
                                <option value="walkthrough"> Walkthrough </option>
                            </select>
                            <label>Opening Date: </label>
                            <input
                                name = "openingDate"
                                placeholder="opening date"
                                type="date"
                                onChange={ (e) => {
                                    this.setState({ openingDate: e.target.value })
                                }}
                                value= { this.state.openingDate }
                            >
                            </input>
                        <label>About:</label>
                        <textarea className="commentInput"
                            name = "about"
                            placeholder="about"
                            type="text"
                            onChange={ (e) => {
                                this.setState({ about: e.target.value })
                            }}
                            value= { this.state.about }
                        />
                        <button className="submitBtn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewAttractionEntry


// themeParkId: DataTypes.INTEGER,
// name: DataTypes.STRING,
// type: DataTypes.STRING,
// openingDate: DataTypes.DATEONLY,
// status: DataTypes.BOOLEAN,
// about: DataTypes.TEXT

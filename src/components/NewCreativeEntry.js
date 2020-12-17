import React, { Component } from 'react'

class NewCreativeEntry extends Component {
    state = {
        name: '',
        about: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewCreative(
            this.state.name, 
            this.state.about
        )
        this.props.onClose()
    }

    render () {
        if(!this.props.creativeShow) {
            return null
        }

        return (
            <div className="newEntry">
                <div>
                    <button onClick={ this.props.onClose } className="closeButton">
                        Close
                    </button>
                </div>
                <h5>Submit a New Creative</h5>
                <div>
                    <form className="creativeEntryForm" onSubmit={ this.handleSubmit }>
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
                        <br />
                        <button className="submitBtn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewCreativeEntry
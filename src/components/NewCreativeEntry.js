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
            <div>
                <div>
                    <button onClick={ this.props.onClose } className="closeButton">
                        Close
                    </button>
                </div>
                <h3>Submit a New Creative</h3>
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

export default NewCreativeEntry
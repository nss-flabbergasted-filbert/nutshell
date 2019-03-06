import React, { Component } from "react"

export default class ChatForm extends Component {

    state = {
        text: "",
        // UserId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    makeNewMessage = evt => {
        evt.preventDefault();

        const chats = {
            text: this.state.text,
            // UserId: parseInt(this.state.UserId)
        }

        this.props
            .addChat(chats)
            .then(() => this.props.history.push("/chats"));
    }


render() {
    return (
        <React.Fragment>
            <form className="chatForm">
                <div className="form-group">
                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="chatMessage"
                    placeholder="chat message" />
                    <textarea rows="4" cols="50"></textarea>
                    <button
                        type="submit"
                        onClick={this.makeNewMessage}
                        className="btn btn-primary">Submit</button>
                </div>
            </form>
        </React.Fragment>
    )
}
}
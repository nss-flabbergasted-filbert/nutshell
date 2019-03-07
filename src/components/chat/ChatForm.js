import React, { Component } from "react"

export default class ChatForm extends Component {

    state = {
        text: "",
        userId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    makeNewMessage = evt => {
        evt.preventDefault()

        const chats = {
            text: this.state.chatMessage,
            userId: parseInt(this.state.userId)
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
import React, { Component } from "react"
import ChatManager from "../../modules/ChatManager"

export default class ChatEdit extends Component {
    state = {
        text: "",
        // userId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingChat = evt => {
        evt.preventDefault()

        const editedChat = {
            id: this.props.match.params.chatId,
            text: this.state.text
        }

        this.props.updateExistingChat(editedChat)
        .then(() => this.props.history.push("/chats"))
    }

    componentDidMount() {
        ChatManager.get()
    }
}
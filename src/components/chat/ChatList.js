import React, { Component } from "react"

export default class ChatList extends Component {
    render() {

        return (
            <React.Fragment>

                <section className="chats">
                    {
                            this.props.chats.map(chat =>
                            <div key={chat.id}>
                                <section>{chat.text}</section>
                                <button type="button"
                                className="btn btn-success"
                                onClick={() => {
                                this.props.history.push(`/chats/${chat.id}/edit`);
                                }}
                                >Edit Chat</button>
                            </div>)
                    }
                </section>
                <div className="newChatButton">
                    <button type="button"
                        onClick={() => this.props.history.push("/chats/new")}
                        className="btn btn-success">
                        New Chat Message
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

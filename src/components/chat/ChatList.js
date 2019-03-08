import React, { Component } from "react"
import ChatCard from "./ChatCard";
import "./chat.css"

export default class ChatList extends Component {
    render() {

        return (
            <React.Fragment>

                <section className="chats">
                    <button type="button"
                        onClick={() => this.props.history.push("/chats/new")}
                        className="btn btn-success">
                        New Chat Message
                    </button>
                    <article id="message">
                        {
                            this.props.chats.map(chat =>
                                <ChatCard key={chat.id} chat={chat} updateChat={this.props.updateChat} deleteChat={this.props.deleteChat}{...this.props} />
                            )}
                    </article>
                </section>
            </React.Fragment>
        )
    }
}

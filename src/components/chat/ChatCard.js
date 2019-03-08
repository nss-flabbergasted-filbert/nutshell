import React, { Component } from "react"
import "./chat.css"

export default class ChatCard extends Component {

    render() {

        let user = this.props.users
            .find(user => parseInt(user.id) === parseInt(this.props.chat.userId)) || {}

        return (
            <div key={this.props.chat.id} className="card">
                <div className="card-body">
                        {user.username}:

                        {this.props.chat.text}
                    <h5 className="card-title">
                        <a href="#"
                            onClick={() => this.props.deleteChat(this.props.chat.id)}
                            className="card-link">Delete</a>
                            <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                        this.props.history.push(`/chats/${this.props.chat.id}/edit`);
                        }}
                        >Edit</button>
                    </h5>
                </div>
            </div>
        )
    }
}



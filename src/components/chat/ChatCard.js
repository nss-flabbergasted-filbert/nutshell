import React, { Component } from "react"

export default class ChatCard extends Component {
    render() {
        return (
            <div key={this.props.message.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.card.text}
                        <button type="button"
                                className="btn btn-success"
                                onClick={() => {
                                this.props.history.push(`/chats/${this.props.animal.id}/edit`);
                                }}
                                >Edit</button>
                        <a href="#"
                            onClick={() => this.props.deleteChat(this.props.chat.id)}
                            className="card-link">Delete</a>
                    </h5>
                </div>
            </div>
        )
    }
}
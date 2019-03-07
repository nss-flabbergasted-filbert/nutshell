import React, { Component } from "react"
import "./chat.css"

export default class ChatCard extends Component {
    render() {
        return (
            <div key={this.props.chat.id} className="card">
                <div className="card-body">
                        {this.props.chat.text}
                    <h5 className="card-title">
                    {
                        (this.props.chat.userId === parseInt(sessionStorage.getItem("credentials"))) ?                         <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                        this.props.history.push(`/chats/${this.props.chat.id}/edit`);
                        }}
                        >Edit</button> : ""
                    }

                        <a href="#"
                            onClick={() => this.props.deleteChat(this.props.chat.id)}
                            className="card-link">Delete</a>
                    </h5>
                </div>
            </div>
        )
    }
}
import React, { Component } from "react"

export default class ChatCard extends Component {
    render() {
        return (
            <div key={this.props.message.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.card.message}
                        <button type="button"
                                className="btn btn-success"
                                onClick={() => {
                                this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                                }}
                                >Edit</button>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</a>
                    </h5>
                </div>
            </div>
        )
    }
}
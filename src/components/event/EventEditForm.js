import React, { Component } from "react"
import EventManager from "../../modules/EventManager";

export default class EventEditForm extends Component {
    // Set initial state
    state = {
      name: "",
      date: "",
      location: ""
      // userId: ""
    };


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
      evt.preventDefault()

      if (this.state.name === "" && this.state.date === "" && this.state.location === "") {
        alert("Please fill out form.")
      } else {
        const editedObject = {
          name: this.state.name,
          date: this.state.date,
          location: this.state.location,
          id: this.props.match.params.eventId
          // Make sure the employeeId is saved to the database as a number since it is a foreign key.
          // userId: parseInt(this.state.userId)
        }

        this.props.updateEvent(editedObject)
            .then(() => this.props.history.push("/events"))
    }

  }

    componentDidMount() {
      EventManager.get(this.props.match.params.eventId)
      .then(event => {
        this.setState({
          name: event.name,
          date: event.date,
          location: event.location,
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form onSubmit={this.updateExistingEvent} className="eventForm">
          <div className="form-group">
            <label htmlFor="eventName">Event</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateForm">Date</label>
            <input
              type="Date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.date}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              className="form-control"
              onChange={this.handleFieldChange}
              id="location"
              value={this.state.location}
            >

            </input>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        </React.Fragment>
      );
    }
}
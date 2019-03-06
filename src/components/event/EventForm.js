import React, { Component } from "react";
import "./Event.css";

export default class EventForm extends Component {
  // Set initial state
  state = {
    name: "",
    date: "",
    location: "",
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    debugger;
    this.setState(stateToChange);
  }

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewEvent = evt => {
    evt.preventDefault()
    if (this.state.event === "") {
    } else {
      const event = {
        name: this.state.name,
        date: this.state.date,
        location: this.state.location
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        // userId: parseInt(this.state.userId)
      }

      // Create the animal and redirect user to animal list
      this.props
        .post(event)
        .then(() => this.props.history.push("/events"));
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="eventForm">
          <div className="form-group">
            <label htmlFor="eventName">Event</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="eventName"
              placeholder="Event"
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
              placeholder="Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              defaultValue=""
              className="form-control"
              onChange={this.handleFieldChange}
              id="location"
              placeholder="Location"
            >

            </input>
          </div>
          <button
            type="submit"
            onClick={this.constructNewEvent}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
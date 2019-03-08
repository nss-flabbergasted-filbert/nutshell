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
    this.setState(stateToChange);
  }

  constructNewEvent = evt => {
    evt.preventDefault()
    if (this.state.name === "" && this.state.date === "" && this.state.location === "") {
      alert("Please fill out form.")
    } else {
      const object = {
        name: this.state.name,
        date: this.state.date,
        location: this.state.location,
        userId: parseInt(sessionStorage.getItem("credentials"))
      }
      console.log(object)

      this.props.addEvent(object)
        .then(() => this.props.history.push("/events"));
    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.constructNewEvent} className="eventForm">
          <div className="form-group">
            <label htmlFor="eventName">Event</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
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
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
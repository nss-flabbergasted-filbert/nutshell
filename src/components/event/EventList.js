import React, { Component } from 'react'
class EventList extends Component {

    componentDidMount() {
        console.log("componentDidMount -- EventList")
    }

    render() {
        console.log("render -- EventList")
        return (
          <React.Fragment>
          <div>
            <button type="button"
            className="addButton"
            onClick={() => {
              this.props.history.push("/events/new")
            }}
            >Add Event</button>
          </div>
            <section className="events">
            {
            this.props.events.map(events =>
              <div className="event" key={events.id} >
              <p>{events.name}</p>
              <p>{events.date}</p>
              <p>{events.location}</p>
              <button type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(`/events/${events.id}/edit`)
              }}
              >Edit </button>
               <button type="button"
              className="btn red-btn-success"
              onClick={() => this.props.deleteEvent(events.id)
                .then(() => this.props.history.push(`/events`))}
              >Delete </button>
              </div>
              )
            }
            </section>
        </React.Fragment>
        )
    }
}

export default EventList
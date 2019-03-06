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
            this.props.events.map(event =>
              <div className="event" key={event.id} >
              <h4>{event.name}</h4>
              <h5>{event.date}</h5>
              <h5>{event.location}</h5>
              </div>
              )
            }
            </section>
        </React.Fragment>
        )
    }
}

export default EventList
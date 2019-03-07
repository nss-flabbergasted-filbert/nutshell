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
              <div className="events" key={events.id} >
              <h4>{events.name}</h4>
              <h5>{events.date}</h5>
              <h5>{events.location}</h5>
              </div>
              )
            }
            </section>
        </React.Fragment>
        )
    }
}

export default EventList
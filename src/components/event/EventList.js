import React, { Component } from 'react'
import { Link } from "react-router-dom"


class EventList extends Component {

    componentDidMount() {
        console.log("componentDidMount -- EventList")
    }

    render() {
        console.log("render -- EventList")
        return (
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
        )
    }
}

export default EventList
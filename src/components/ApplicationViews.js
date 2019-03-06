import React, { Component } from "react"
import { Route } from 'react-router-dom'
import EventManager from '../modules/EventManager'

import ChatList from './chat/ChatList'
import NewsList from './news/NewsList'
import EventList from './event/EventList'
import TaskList from './task/TaskList'
import EventForm from "./event/EventForm";

class ApplicationViews extends Component {
  state = {
    chat: [],
    news: [],
    events: [],
    tasks: []
  }

  addEvent = (object) => {
    return EventManager.post(object)
      .then(() => {
        return EventManager.getAll()
      })
      .then(events => this.setState({ events: events }))
  }

  deleteEvent = (id) =>
    EventManager.deleteAndList(id)
      // .then(EventManager.getAll)
      .then(events => this.setState({ events: events }))

  componentDidMount() {
    EventManager.getAll()
      .then(events => this.setState({ events: events }))

  }
  render() {
    console.log(this.props.activeUser)
    return <React.Fragment>
      <Route exact path="/chat" render={(props) => {
        return <ChatList chat={this.state.chat} />
      }} />
      <Route exact path="/articles" render={(props) => {
        return <NewsList news={this.state.news} />
      }} />
      <Route exact path="/events" render={(props) => {
        return <EventList events={this.state.events}
          addEvent={this.addEvent}
          {...props} />
      }} />
      <Route exact path="/events/new" render={(props) => {
        return <EventForm events={this.state.events}
          addEvent={this.addEvent}
          {...props} />
      }} />
      <Route exact path="/tasks" render={(props) => {
        return <TaskList tasks={this.state.tasks} />
      }} />


    </React.Fragment>
  }
}

export default ApplicationViews

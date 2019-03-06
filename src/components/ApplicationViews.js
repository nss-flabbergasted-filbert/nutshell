import React, { Component } from "react"
import { Route } from 'react-router-dom'

import ChatList from './chat/ChatList'
import NewsList from './news/NewsList'
import EventList from './event/EventList'
import TaskList from './task/TaskList'



class ApplicationViews extends Component {
  tasksFromAPI = [
    {
      "name": "Make lot's of activities with vague directions. ",
      "completion_date": 1550966400000,
      "is_complete": true,
      "userId": 1,
      "id": 1
    },
    {
      "name": "Poop. ",
      "completion_date": 1550966400000,
      "is_complete": true,
      "userId": 1,
      "id": 2
    },
  ]
  
  state = {
    tasks: this.tasksFromAPI
  }
  // state = {
  //   chat: [],
  //   news: [],
  //   events: [],
  //   tasks: []
  // }

  componentDidMount() { }
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
        return <EventList events={this.state.events} />
      }} />
       <Route exact path="/tasks" render={(props) => {
        return <TaskList tasks={this.state.tasks} />
      }} />


    </React.Fragment>
  }
}

export default ApplicationViews

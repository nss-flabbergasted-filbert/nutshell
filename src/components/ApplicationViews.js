import React, { Component } from "react"
import { Route } from 'react-router-dom'

import ChatList from './chat/ChatList'
import NewsList from './news/NewsList'
import EventList from './event/EventList'
import TaskList from './task/TaskList'
import ChatManager from '../modules/ChatManager'
import ChatForm from "./chat/ChatForm"

import TaskManager from '../modules/TaskManager'

import TaskForm from './task/TaskForm'
import EditTaskForm from './task/EditTaskForm'
class ApplicationViews extends Component {

  state = {
    chats: [],
    news: [],
    events: [],
    tasks: []
  }

  addTask = task =>
    TaskManager.post(task)
      .then(() => TaskManager.getAll())
      .then(tasks =>
        this.setState({ tasks: tasks })
      )

  deleteTask = task =>
    TaskManager.deleteAndList(task)

  editTask = task =>
    TaskManager.put(task)

  addChat = (message) => {
    return ChatManager.post(message)
      .then(() => ChatManager.getAll())
      .then(message =>
        this.setState({
          chats: message
        }))
  }

  componentDidMount() {
    TaskManager.getAll()
      .then(tasks =>
        this.setState({ tasks: tasks })
      )

    ChatManager.getAll().then(AllChats => {
      this.setState({ chats: AllChats })
    })
  }


render() {
  return <React.Fragment>
    <Route exact path="/chats" render={(props) => {
      return <ChatList chats={this.state.chats} addChat={this.addChat} {...props} />
    }} />
    <Route exact path="/chats/new" render={(props) => {
      return <ChatForm chats={this.state.chats} addChat={this.addChat} {...props} />
    }} />
    <Route exact path="/articles" render={(props) => {
      return <NewsList news={this.state.news} />
    }} />
    <Route exact path="/events" render={(props) => {
      return <EventList events={this.state.events} />
    }} />
    <Route exact path="/tasks" render={(props) => {
      return <TaskList tasks={this.state.tasks} {...props} />
    }} />
    <Route exact path="/tasks/new" render={(props) => {
      return <TaskForm {...props}
        addTask={this.addTask} {...props}
        tasks={this.state.tasks} {...props} />
    }} />
    <Route
      path="/tasks/:taskId(\d+)/edit" render={props => {
        return <EditTaskForm {...props} tasks={this.state.tasks} editTask={this.editTask} />
      }}
    />

  </React.Fragment>
}
}


export default ApplicationViews

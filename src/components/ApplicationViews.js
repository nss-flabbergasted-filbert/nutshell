import React, { Component } from "react"
import { Route } from 'react-router-dom'
import EventManager from '../modules/EventManager'
import ChatList from './chat/ChatList'
import NewsList from './news/NewsList'
import EventList from './event/EventList'
import TaskList from './task/TaskList'
import ArticleManager from "../modules/ArticleManager"
import AddNewsForm from "./news/AddNewsForm";
import NewsEditForm from "./news/NewsEditForm";
import EventForm from "./event/EventForm";
import ChatManager from '../modules/ChatManager'
import ChatForm from "./chat/ChatForm"
import EventEditForm from "./event/EventEditForm";

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

  addNews = (newArticle) => {
    return ArticleManager.post(newArticle)
      .then(() => ArticleManager.getAll())
      .then(news =>
        this.setState({ news: news }))
  }

  editNews = (editedNews) => {
    return ArticleManager.put(editedNews)
      .then(() => ArticleManager.getAll())
      .then(news =>
        this.setState({ news: news }))
  }

  updateEvent = (editedObject) => {
    return EventManager.put(editedObject)
      .then(() => {
        return EventManager.getAll()
      })
      .then(events => this.setState({ events: events }))
  }
  addEvent = (object) => {
    return EventManager.post(object)
      .then(() => {
        return EventManager.getAll()
      })
      .then(events => this.setState({ events: events }))
  }

  deleteEvent = (id) => {
    return EventManager.deleteAndList(id)
      .then(events => this.setState({ events: events }))
  }
  addChat = (message) => {
    return ChatManager.post(message)
      .then(() => ChatManager.getAll())
      .then(message =>
        this.setState({
          chats: message
        }))
  }

  addTask = task =>
    TaskManager.post(task)
      .then(() => TaskManager.getAll())
      .then(tasks =>
        this.setState({ tasks: tasks })
      )

  deleteTask = task =>
    TaskManager.deleteAndList(task)

  editTask = task => {
    return TaskManager.put(task)
      .then(() => {
        return TaskManager.getAll()
      })
      .then(tasks => this.setState({ tasks: tasks }))
  }


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
    EventManager.getAll()
      .then(events => this.setState({ events: events }))
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
        return <NewsList addNews={this.addNews}
          {...props}
          news={this.state.news} />
      }} />

      <Route exact path="/articles/new" render={(props) => {
        return <AddNewsForm addNews={this.addNews}
          {...props}
          news={this.state.news} />
      }} />

      <Route path="/articles/:articleId(\d+)/edit" render={props => {
        return <NewsEditForm {...props} news={this.state.news} editNews={this.editNews} />
      }}
      />

      <Route exact path="/events" render={(props) => {
        return <EventList events={this.state.events}
          addEvent={this.addEvent}
          deleteEvent={this.deleteEvent}
          {...props} />
      }} />
      <Route exact path="/events/new" render={(props) => {
        return <EventForm events={this.state.events}
          addEvent={this.addEvent}
          {...props} />
      }} />
      <Route path="/events/:eventId(\d+)/edit" render={props => {
        return <EventEditForm
          {...props}
          events={this.state.events}
          updateEvent={this.updateEvent} />
      }}
      />
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
        }} />

    </React.Fragment>

  }
}


export default ApplicationViews

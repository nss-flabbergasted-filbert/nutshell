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
import ChatEditForm from "./chat/ChatEditForm";
import UserManager from "../modules/UserManager"

class ApplicationViews extends Component {
  state = {
    chats: [],
    news: [],
    events: [],
    tasks: [],
    users: []
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

  addChat = (message) => {
    return ChatManager.post(message)
      .then(() => ChatManager.getAll())
      .then(message =>
        this.setState({
          chats: message
        }))
  }

  updateChat = (editedChatObj) => {
    return ChatManager.put(editedChatObj)
      .then(() => ChatManager.getAll())
      .then(chats => { this.setState({ chats: chats }) })
  }

  deleteChat = (id) => {
    return ChatManager.deleteAndList(id)
      .then(chats => { this.setState({ chats: chats })})
  }

  componentDidMount() {
    EventManager.getAll().then(events =>
      this.setState({ events: events }))
    ChatManager.getAll().then(AllChats => {
      this.setState({ chats: AllChats })
    })
    ArticleManager.getAll().then((allNews) => {
      this.setState({ news: allNews })
    })
    UserManager.getAll().then(users => this.setState({users: users}))
  }

  render() {
    return (

      <React.Fragment>
        <Route exact path="/chats" render={(props) => {
          return <ChatList users={this.state.users} chats={this.state.chats} addChat={this.addChat} deleteChat={this.deleteChat} updateChat={this.updateChat} {...props} />
        }} />
        <Route exact path="/chats/new" render={(props) => {
          return <ChatForm chats={this.state.chats} addChat={this.addChat} {...props} />
        }} />
        <Route exact path="/chats/:chatId(\d+)/edit" render={(props) => {
          return <ChatEditForm chats={this.state.chats} updateChat={this.updateChat} {...props} />
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
        return <TaskList tasks={this.state.tasks} />
      }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews

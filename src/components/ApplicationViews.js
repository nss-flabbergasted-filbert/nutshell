import React, { Component } from "react";
import { Route } from "react-router-dom";
import EventManager from "../modules/EventManager";
import ChatList from "./chat/ChatList";
import NewsList from "./news/NewsList";
import EventList from "./event/EventList";
import TaskList from "./task/TaskList";
import ArticleManager from "../modules/ArticleManager";
import AddNewsForm from "./news/AddNewsForm";
import NewsEditForm from "./news/NewsEditForm";
import EventForm from "./event/EventForm";
import ChatManager from "../modules/ChatManager";
import ChatForm from "./chat/ChatForm";
import EventEditForm from "./event/EventEditForm";
import ChatEditForm from "./chat/ChatEditForm";
import UserManager from "../modules/UserManager"

import TaskManager from "../modules/TaskManager";

import TaskForm from "./task/TaskForm";
import EditTaskForm from "./task/EditTaskForm";


class ApplicationViews extends Component {
  state = {
    chats: [],
    news: [],
    events: [],
    tasks: [],
    users: []
  }

  addNews = newArticle => {
    return ArticleManager.post(newArticle)
      .then(() => ArticleManager.sortArticles())
      .then(news => this.setState({ news: news }));
  };

  editNews = editedNews => {
    return ArticleManager.put(editedNews)
      .then(() => ArticleManager.getAll())
      .then(news => this.setState({ news: news }));
  };

  updateEvent = editedObject => {
    return EventManager.put(editedObject)
      .then(() => {
        return EventManager.getAll();
      })
      .then(events => this.setState({ events: events }));
  };
  addEvent = object => {
    return EventManager.post(object)
      .then(() => {
        return EventManager.getAll();
      })
      .then(events => this.setState({ events: events }));
  };

  deleteEvent = id => {
    return EventManager.deleteAndList(id).then(events =>
      this.setState({ events: events })
    );
  };

  addTask = task =>
    TaskManager.post(task)
      .then(() => TaskManager.getAll())
      .then(tasks => this.setState({ tasks: tasks }));


  deleteNews = (id) => {
    return ArticleManager.deleteAndList(id)
    .then(news => this.setState({ news: news}))
  }

  deleteTask = task =>
    TaskManager.deleteAndList(task).then(tasks =>
      this.setState({ tasks: tasks })
    );

  editTask = task => {
    return TaskManager.put(task)
      .then(() => {
        return TaskManager.getAll();
      })
      .then(tasks => this.setState({ tasks: tasks }));
  };

  patchTask = editedTask => {
    return TaskManager.patch(editedTask) //create a patch call in API manager
      .then(() => {
        return TaskManager.getAll();
      })
      .then(tasks => this.setState({ tasks: tasks }));
  };

  taskCompleted = id => {
    const taskToChange = {
      id: id,
      isCompleted: true
    };
    this.patchTask(taskToChange)
      .then(() => {
        return TaskManager.getAll();
      })
      .then(tasks => this.setState({ tasks: tasks }));
  };

  addChat = message => {
    return ChatManager.post(message)
      .then(() => ChatManager.getAll())
      .then(message =>
        this.setState({
          chats: message
        })
      );
  };

  updateChat = editedChatObj => {
    return ChatManager.put(editedChatObj)
      .then(() => ChatManager.getAll())
      .then(chats => {
        this.setState({ chats: chats });
      });
  };

  deleteChat = id => {
    return ChatManager.deleteAndList(id).then(chats => {
      this.setState({ chats: chats });
    });
  };

  componentDidMount() {
    TaskManager.getAll().then(tasks => this.setState({ tasks: tasks }));

    ChatManager.getAll().then(AllChats => {
      this.setState({ chats: AllChats });
    });
    EventManager.getEventsSorted().then(events => this.setState({ events: events }));

    ArticleManager.sortArticles().then(allNews => {
      this.setState({ news: allNews })
    })
    UserManager.getAll().then(users => this.setState({users: users}))
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/chats"
          render={props => {
            return (
              <ChatList
                chats={this.state.chats}
                addChat={this.addChat}
                deleteChat={this.deleteChat}
                updateChat={this.updateChat}
                {...props}
                users={this.state.users}
              />
            );
          }}
        />
        <Route
          exact
          path="/chats/new"
          render={props => {
            return (
              <ChatForm
                chats={this.state.chats}
                addChat={this.addChat}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/chats/:chatId(\d+)/edit"
          render={props => {
            return (
              <ChatEditForm
                chats={this.state.chats}
                updateChat={this.updateChat}
                users={this.state.users}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/articles"
          render={props => {
            return (
              <NewsList
                addNews={this.addNews}
                {...props}
                news={this.state.news}
                users={this.state.users}
                deleteNews={this.deleteNews}
              />
            );
          }}
        />

        <Route
          exact
          path="/articles/new"
          render={props => {
            return (
              <AddNewsForm
                addNews={this.addNews}
                {...props}
                news={this.state.news}
              />
            );
          }}
        />

        <Route
          path="/articles/:articleId(\d+)/edit"
          render={props => {
            return (
              <NewsEditForm
                {...props}
                news={this.state.news}
                editNews={this.editNews}
              />
            );
          }}
        />

        <Route
          exact
          path="/events"
          render={props => {
            return (
              <EventList
                events={this.state.events}
                addEvent={this.addEvent}
                deleteEvent={this.deleteEvent}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/events/new"
          render={props => {
            return (
              <EventForm
                events={this.state.events}
                addEvent={this.addEvent}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            return (
              <EventEditForm
                {...props}
                events={this.state.events}
                updateEvent={this.updateEvent}
              />
            );
          }}
        />
        <Route
          exact
          path="/tasks"
          render={props => {
            return (
              <TaskList
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                taskCompleted={this.taskCompleted}
                patchTask={this.patchTask}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/tasks/new"
          render={props => {
            return (
              <TaskForm
                {...props}
                addTask={this.addTask}
                {...props}
                tasks={this.state.tasks}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/tasks/:taskId(\d+)/edit"
          render={props => {
            return (
              <EditTaskForm
                {...props}
                tasks={this.state.tasks}
                editTask={this.editTask}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;

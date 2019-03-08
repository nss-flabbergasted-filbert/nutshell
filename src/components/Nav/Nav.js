import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./nav.css"
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Nutshell
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chats">Chats</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/articles">Articles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tasks">Tasks</Link>
            </li>
          <li
          className="nav-link">Aloha 🌺 {this.props.activeUser.username}
          <button
            type="button"
            className="button"
            onClick={this.logout}>
            Logout
        </button>
        </li>
        </ul>
      </nav>
        )
      }
    }

    export default Nav

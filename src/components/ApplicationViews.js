import React, { Component } from "react"
import IsAuth from "./Auth/IsAuth"
class ApplicationViews extends Component {
  state = {
    articles: []
  }
  componentDidMount() {}
  render() {
    console.log(this.props.activeUser)
    return <React.Fragment />
  }
}

export default ApplicationViews

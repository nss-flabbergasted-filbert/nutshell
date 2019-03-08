import React, { Component } from "react";

export default class AddNewsForm extends Component {

    state = {
        newsTitle: "",
        newsSummary: "",
        newsURL: "",
        timestamp: ""
    }

    // Update state whenever input is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      constructNewStory = evt => {
          evt.preventDefault()
          const story = {
            title: this.state.newsTitle,
            summary: this.state.newsSummary,
            url: this.state.newsURL,
            timestamp: Date().split(" ").splice(0.5).join(" "),
            userId: parseInt(sessionStorage.getItem("credentials"))
          }

          this.props.addNews(story)
          .then(() => this.props.history.push("/articles"))
      }

      render() {
          return (
              <React.Fragment>
                  <form className="newsForm">
                      <div className="form-group">
                          <label htmlFor="newsTitle">Title</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="newsTitle"
                              placeholder="News Story Title"
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="newsSummary">Summary</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="newsSummary"
                              placeholder="News Summary"
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="newsURL">URL</label>
                          <input
                              type="text"
                              required
                              className="form-control"
                              onChange={this.handleFieldChange}
                              id="newsURL"
                              placeholder="News Story URL"
                          />
                      </div>
                      <button
            type="submit"
            onClick={this.constructNewStory}
            className="btn btn-primary"
          >
            Submit
          </button>
                      </form>
              </React.Fragment>
          )
      }
}
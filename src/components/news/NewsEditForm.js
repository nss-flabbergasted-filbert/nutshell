import React, { Component } from "react"
import ArticleManager from "../../modules/ArticleManager";



export default class NewsEditForm extends Component {
    state = {
        newsTitle: "",
        newsSummary: "",
        newsURL: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingArticle = evt => {
        evt.preventDefault()
        const editedArticle = {
            title: this.state.newsTitle,
            summary: this.state.newsSummary,
            url: this.state.newsURL,
            timestamp: this.state.timestamp,
            userId: parseInt(sessionStorage.getItem("credentials")),
            id: this.props.match.params.articleId
        };

        this.props.editNews(editedArticle)
        .then(() => this.props.history.push("/articles"))

    }
            componentDidMount() {
                ArticleManager.get(this.props.match.params.articleId)
                .then(article => {
                    this.setState({
                        newsTitle: article.title,
                        newsSummary: article.summary,
                        newsURL: article.url,
                        timestamp: article.timestamp,
                        id: this.props.match.params.articleId
                    })
                })
            }

    render () {
        return (
            <React.Fragment>
                <form className="newsForm">
                    <div className="form-group">
                        <label htmlFor="newsTitle">News Title</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="newsTitle"
                            value={this.state.newsTitle}
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
                              value={this.state.newsSummary}
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
                              value={this.state.newsURL}
                          />
                      </div>
                      <button
            type="submit"
            onClick={this.updateExistingArticle}
            className="btn btn-primary"
          >
            Submit
          </button>
                        </form>
            </React.Fragment>
        )
    }
}
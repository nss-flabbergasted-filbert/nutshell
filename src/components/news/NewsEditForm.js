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
        let editedArticle = {
            id: this.match.params.articleId,
            title: this.state.newsTitle,
            summary: this.state.newsSummary,
            url: this.state.newsURL
        };

        this.props.editNews(editedArticle)
        .then(() => this.props.history.push("./articles"))

    }
            componentDidMount() {
                ArticleManager.get(this.props.match.params.articleId)
                .then(article => {
                    this.setState({
                        newsTitle: article.title,
                        newsSummary: article.summary,
                        newsURL: article.url
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
                        </form>
            </React.Fragment>
        )
    }
}
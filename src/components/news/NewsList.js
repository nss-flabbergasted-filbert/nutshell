import React, { Component } from "react";

export default class NewsList extends Component {
  render() {

    let user = this.props.users
            .find(user => parseInt(user.id) === parseInt(this.props.articles.userId)) || {}

    return (
      <React.Fragment>
        <section className="newsList">
          <div className="addNewsButton">
            <button
              type="button"
              className="add-news-button"
              onClick={() => {
                this.props.history.push("/articles/new");
              }}
            >
              Add New Story!
            </button>
          </div>
          <section>
            {this.props.news.map(article => (
              <div key={article.id}>
                <div>Title: {article.title}</div>
                <div>Synopsis: {article.summary}</div>
                <div>Link: {article.url}</div>
                <div>Date: {article.timestamp}</div>
                <div>Posted By: {user.username}</div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    this.props.history.push(
                      `/articles/${article.id}/edit`
                    );
                  }}
                >
                  Edit
                </button>
                <button
                            onClick={() => this.props.deleteNews(article.id)
                                .then(() => this.props.history.push("/articles"))}
                                className="card-link">Delete</button>
              </div>
            ))}
          </section>
        </section>
      </React.Fragment>
    );
  }
}
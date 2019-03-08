import React, { Component } from "react";
import "./NewsList.css"

export default class NewsList extends Component {
  render() {

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
              <div className="newsCard"key={article.id}>
                <div><h2>{article.title}</h2></div>
                <div>Synopsis: {article.summary}</div>
                <div>Link: <a href={`${article.url}`}>Read Article</a></div>
                <div>Date: {article.timestamp}</div>
                <div>Posted By: {article.userId}</div>
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
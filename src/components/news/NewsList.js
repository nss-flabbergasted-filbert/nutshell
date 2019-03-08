import React, { Component } from "react";
import "./NewsList.css"
import NewsCard from "./NewsCard"

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
            {
              this.props.news.map(article =>
                <NewsCard key={article.id} article={article} editNews={this.props.editNews} deleteNews={this.props.deleteNews} users={this.props.users} {...this.props} />
              )}
          </section>
        </section>
      </React.Fragment>
    );
  }
}
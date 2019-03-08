import React, { Component } from "react"

export default class NewsCard extends Component {

    render() {
        let article = this.props.article
        let user = this.props.users
            .find(user => parseInt(user.id) === parseInt(this.props.article.userId)) || {}

        return (
            <div key={article.id} className="news_card">
                <div className="card-body">
                    <div key={article.id}>
                        <div>Title: {article.title}</div>
                        <div>Synopsis: {article.summary}</div>
                        <div> <a href={`${article.url}`}>Read Article </a> </div>
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
                        >Edit</button>
                        <button
                            onClick={() => this.props.deleteNews(article.id)
                                .then(() => this.props.history.push("/articles"))}
                            className="card-link">Delete</button>
                    </div>

                </div>
            </div>
        )
    }
}
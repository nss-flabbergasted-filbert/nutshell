import React, {Component} from "react"

export default class NewsList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="newsList">
                    <section>
                        {
                            this.props.news.map(article =>
                                <div key ={article.id}>
                                <div>{article.title}</div>
                                <div>{article.summary}</div>
                                <div>{article.url}</div>
                                <div>{article.timestamp}</div>
                                <div>{article.userId}</div>
                                </div>)
                        }
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
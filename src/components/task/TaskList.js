import React, { Component } from 'react'



export default class TaskList extends Component {
    render() {
        return (
            <section className="tasks">
                {
                    this.props.tasks.map(task =>
                        <div className="task" key={task.id}>
                            <h4>{task.name}</h4>
                            <h2>{task.completion_date}</h2>
                        </div>
                    )
                }
            </section>
        );
    }
}
import React, { Component } from 'react'



export default class TaskList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="taskButton">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/tasks/new")}
                    }> Add New Task
            </button>
            </div>
            <section className="tasks">
            
                {
                    this.props.tasks.map(task =>
                        <div className="task" key={task.id}>
                            <h5>Task Name:{task.name}</h5>
                            <h5>Task Completion Date:{task.completion_date}</h5>
                        </div>
                    )
                }
            </section>
            </React.Fragment>
        );
    }
}
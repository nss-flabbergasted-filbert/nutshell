import React, { Component } from 'react'


export default class Task extends Component {
    render() {
      

        return (
            <React.Fragment>
                <div className="task" key={this.props.task.id}>
                    <h5>Task Name:{this.props.task.name}</h5>
                    <h5>Task Completion Date:{this.props.task.date}</h5>
                    <button
                        type="button"
                        className="editTaskButton"
                        onClick={() => {
                            this.props.history.push(`/tasks/${this.props.task.id}/edit`);
                        }}
                    >Edit Task</button>
                    {/* <form className="taskForm">
                        <div className="form-group"> */}
                            <label htmlFor="isComplete">Is Complete</label>
                            <input type="checkbox"
                                required
                                className="form-control"
                        
                                name="isComplete"
                                
                                onClick={() => this.props.deleteTask(this.props.task.id)}
                                >
                            </input>
                        </div>
                    {/* </form> */}

                {/* </div> */}
            </React.Fragment>
        )
    }
}


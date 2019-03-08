import React, { Component } from 'react'


export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    updateTask = () => {
        const editedTask = {
            isComplete: this.state.isComplete
        }

        this.props.patchTask(editedTask)
            .then(() => this.props.history.push("/tasks"))
    }

    handleInputChange () {
        this.setState({isComplete: !this.state.isComplete}, () => this.updateTask())
    }

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
                        // checked={this.state.isComplete}
                        onClick={() => this.props.taskCompleted(this.props.task.id)}
                    >
                    </input>
                </div>
                {/* </form> */}

                {/* </div> */}
            </React.Fragment >
        )
    }
}


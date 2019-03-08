import React, { Component } from 'react'


export default class Task extends Component {
  
    // let users = this.props.users
    // .find(user => parseInt(user.id) === parseInt(this.props.task.userId)) || {}

        state = {
            isComplete: false,
        };

    

    updateTask = () => {
        const editedTask = {
            isComplete: this.state.isComplete
        }

        this.props.patchTask(editedTask, this.props.task.id)
            .then(() => this.props.history.push("/tasks"))
    }

    handleInputChange = () => {
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
                    <form className="taskForm">
                        <div className="form-group">
                    <label htmlFor="isComplete">Is Complete</label>
                    <input type="checkbox"
                        required
                        className="form-control"

                        name="isComplete"
                    
                        onClick={() => this.handleInputChange()}
                    >
                    </input>
                </div>
                </form> 

                 </div> 
            </React.Fragment >
        )
    }
}


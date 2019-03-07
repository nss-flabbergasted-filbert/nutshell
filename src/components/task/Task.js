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
                                
                                    <button type="checkbox" id="isComplete" name="isComplete">
                                        <label HTMlfor="isComplete">Is Complete</label>
                                    </button>

                                </div>
            </React.Fragment>
        )
    }
}


import React, { Component } from "react"
import TaskManager from "../../modules/TaskManager"

export default class EditTaskForm extends Component {
    // Set initial state
    state = {
      name: "",
      date: "",
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingTask = evt => {
      evt.preventDefault()

    
        const editedTask = {
          id: this.props.match.params.taskId,
          name: this.state.name,
          date: this.state.date
        };

    this.props.editTask(editedTask)
    .then(() => this.props.history.push("/tasks"))      
    }
  

    componentDidMount() {
      TaskManager.get(this.props.match.params.taskId)
      .then(task => {
        this.setState({
          name: task.name,
          date: task.date,
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="taskForm">
            <div className="form-group">
              <label htmlFor="name">Task name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value = {this.state.name}
              />
            </div>
            <div className="dateForm">
           <label htmlFor="dateForm">Date</label>
           <input
             type="Date"
             required
             className="form-control"
             onChange={this.handleFieldChange}
             id="date"
            //  placeholder="Date"
             value = {this.state.date}
           />
         </div>
            <button
              type="submit"
              onClick={this.updateExistingTask}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}
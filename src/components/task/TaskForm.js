import React, { Component } from "react";


export default class TaskForm extends Component {
    // Set initial state, AnimalForm has it's own state//maintains state of input field as I update the input
    state = {
      name: "",
      date: "",
    };
  
    
    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    };
  

    constructNewTask = evt => {
      evt.preventDefault();
      
        const tasks = {
          name: this.state.name,
          date: this.state.date
        }
        this.props
          .addTask(tasks)
          .then(() => this.props.history.push("/tasks"));
      }

  
    render() {
      return (
        <React.Fragment>
          <form className="taskForm">
            <div className="form-group">
              <label htmlFor="taskName">Task Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                placeholder="Task Name"
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
             placeholder="Date"
           />
         </div>
     
            <button
              type="submit"
              onClick={this.constructNewTask}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}
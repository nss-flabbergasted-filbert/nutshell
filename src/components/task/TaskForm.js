import React, { Component } from "react";


export default class TaskForm extends Component {
    // Set initial state, AnimalForm has it's own state//maintains state of input field as I update the input
    state = {
      name: "",
      date: ""
    };
  
    // Update state whenever an input field is edited
    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    };
  
    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
       */
    constructNewTask = evt => {
      evt.preventDefault();
      if (this.state.tasks === "") {
        window.alert("Please enter an employee");
      } else {
        const tasks = {
          name: this.state.name,
          date: this.state.date
        }
  
        // Create the animal and redirect user to animal list
        this.props
          .addTask(tasks)
          .then(() => this.props.history.push("/tasks"));
      }
    };
  
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
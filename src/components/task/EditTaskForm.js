// import React, { Component } from "react"


// export default class EditTaskForm extends Component {
//     // Set initial state
//     state = {
//         name: "",
//         date: ""
//     }


//     handleFieldChange = evt => {
//         const stateToChange = {}
//         stateToChange[evt.target.id] = evt.target.value
//         this.setState(stateToChange)
//     }

//     editTask = evt => {
//         evt.preventDefault()

//         if (this.state.task === "") {
//             window.alert("Please select a task");
//         } else {
//             const editedTask = {
//                 id: this.props.match.params.taskId,
//                 name: this.state.name,
//                 date: this.state.date,
//             };

//             this.props.updateAnimal(editedTask)
//                 .then(() => this.props.history.push("/tasks"))
//         }
//     }

//     componentDidMount() {



//         render() {
//             return (
//                 <React.Fragment>
//                     <form className="taskForm">
//                         <div className="form-group">
//                             <label htmlFor="taskName">Task Name</label>
//                             <input
//                                 type="text"
//                                 required
//                                 className="form-control"
//                                 onChange={this.handleFieldChange}
//                                 id="name"
//                                 placeholder="Task Name"
//                             />
//                         </div>
//                         <div className="dateForm">
//                             <label htmlFor="dateForm">Date</label>
//                             <input
//                                 type="Date"
//                                 required
//                                 className="form-control"
//                                 onChange={this.handleFieldChange}
//                                 id="date"
//                                 placeholder="Date"
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             onClick={this.constructNewTask}
//                             className="btn btn-primary"
//                         >
//                             Submit
//             </button>
//                     </form>
//                 </React.Fragment>
//             );
//         }
//     }
// }
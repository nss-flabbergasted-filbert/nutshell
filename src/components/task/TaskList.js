import React, { Component } from 'react'
import './task.css'
import Task from './Task'



export default class TaskList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="taskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }
                        }> Add New Task
            </button>
                </div>
                <section className="tasks">

                    {
                        this.props.tasks.map(task =>
                            <div className="task" key={task.id}>
                                <Task task={task} {...this.props}
                                    {...this.props}
                                    history={this.props.history} />
                                </div>

                                )
                            }
                </section>
            </React.Fragment>
                        );
                    }
        }
        

import React, { Component } from 'react';
import TodoList from './todoList'

class Data extends Component {
    state = {
        todoList: [
            { id: 1, check: true, name: 'Hoc tieng Anh' },
            { id: 2, check: true, name: 'Hoc IT' },
            { id: 3, check: false, name: 'Don dep nha cua' },
        ]
    }

    forms = () => {
        return (

            <div>
                <label className="label-lg">What need to be done?</label >
                <input type="text" placeholder="Enter to do ..." />
                <button className="add" onClick>add</button>
                <div className="choose-list">
                    <button>all</button>
                    <button>active</button>
                    <button>complete</button>
                </div>
                <h2 className="total-task">3 tasks remaining</h2>

            </div>

        )
    }
    // ------------- active -----------
    activeTask = (id, check) => {

    }

    // ------------- edit -----------
    editTask = id => {
        const divTask = document.getElementById(`task-${id}`)
    }

    // ------------- delete -----------
    delTask = id => {
        const list = this.state.todoList.filter(task => task.id !== id)
        this.setState({ todoList: list })
    }

    // ------------- add -----------
    addTask = name => {

    }

    render() {
        return (

            <div>
                {this.forms()}
                <div className="task-list">
                    {this.state.todoList.map(task => {
                        return (
                            <TodoList key={task.id}
                                check={task.check}
                                name={task.name}
                                id={task.id}
                                onEdit={this.editTask}
                                onDelete={this.delTask} />)
                    })}
                </div>
            </div>
        );
    }
}

export default Data;
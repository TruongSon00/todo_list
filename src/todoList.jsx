import React, { Component } from 'react'

class TodoList extends Component {



    tasks = (check, name) => {
        return (
            <div className="task" id={'task-' + this.props.id}>
                <input type="checkbox" name="" id="" defaultChecked={check} /> <span className="task-name">{name}</span>
                <div className="choose-update">
                    <button onClick={() => this.props.onEdit(this.props.id)}>edit</button>
                    <button onClick={() => this.props.onDelete(this.props.id)} className="del">delete</button>
                </div>
            </div>
        )
    }

    render() {
        const check = this.props.check ? 'checked' : ''
        const name = this.props.name

        return this.tasks(check, name);
    }
}

export default TodoList;
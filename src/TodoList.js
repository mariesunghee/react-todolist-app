import React, { Component } from 'react';


export default class TodoList extends Component{
    render(){

        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input ref={this.props.inputElement} onChange={this.props.handleInput} placeholder="Task"/>
                        <button type="submit"> Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}
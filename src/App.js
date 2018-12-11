import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            currentItem:{text:'',key:''}
        }
        this.inputElement=React.createRef()
    }

    addItem = e => {
        e.preventDefault()
        console.log("ADDED ITEM")
    }
    handleInput= e =>{
        console.log("Change Input")
        const itemText = e.target.value
        this.setState({
            currentItem:{
                text:itemText,
                key:Date.now()
            }
        })
    }

    render() {
        return (
            <div className="App">
                <TodoList inputElemnet={this.inputElement} addItem={this.addItem} handleInput={this.handleInput}
                currentItem={this.state.currentItem}/>

            </div>
        );
    }
}

export default App;

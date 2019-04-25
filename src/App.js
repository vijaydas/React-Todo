import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
//import TodoForm from './components/TodoComponents/TodoForm;'

const todos = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos,
      task: "",
      completed: false 
    };
  }

  handleChanges = event => {
    this.setState({[event.target.name]: event.target.value});
  } 

  addTodo = event => {
    event.preventDefault();
    
      this.setState({
      todos: [
        ...this.state.todos,
        {task: this.state.task, completed: false}
     ],
    task: ""
    });
  };

  

  render() {
    return (
      <div>
        <h1>Day 1 Todo List MVP</h1>
        <TodoList todos={this.state.todos}/>
        <TodoForm todo={this.addTodo} handleChange={this.handleChanges} taskField={this.state.task}/>
      </div>
    );
  }

}


export default App;

import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './redux/action'
class App extends Component {
  render() {
    let input=React.createRef()
    let todos=this.props.todos.map((todo,index)=>{
      return <li key={todo.des+index} 
      style={{color:todo.completed===true?'red':'blue'}}
      onClick={()=>this.props.toggle(index)}>{todo.des}<button onClick={(e)=>{
        this.props.remove(index);
        e.stopPropagation()
      }}>移除</button></li>
    })
    return (
      <div>
        <input placeholder='请输入任务' ref={input}/><button onClick={()=>this.props.add({des:input.current.value,completed:false})}>添加</button>
        <select onChange={(e)=>this.props.setFilter(e.target.value)}>
          <option value='all'>all</option>
          <option value='completed'>completed</option>
          <option value='uncompleted'>uncompleted</option>
        </select>
        {todos}
      </div>
    )
  }
}
function select(state){
  let todos;
  switch(state.filter){
    case 'all' :
    todos=state.todos
    break;
    case "completed":
    todos=state.todos.filter((todo)=>todo.completed===true)
    break
    case "uncompleted":
    todos=state.todos.filter((todo)=>todo.completed!==true)
    break
    default:
    todos=state.todos
  }
  return {
    todos:todos
  }
}
export default connect(select,actions)(App)

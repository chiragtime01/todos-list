
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React,{ useState } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() { 
  const onDelete=(todo)=>{
    console.log("i am ondelete of todo",todo);
   setTodos(todos.filter((e)=>{
    return e!==todo;
   }))
  }
  const addTodo=(title,desc)=>{
    console.log("i am adding this todo",title,desc)
     let sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const[todos,setTodos]=useState([
    {
      sno: 1,
      title:"GO to the Market",
      desc: "you need to go to the market to get this jobe done"
    },
    {
      sno: 2,
      title:"GO to the Mall",
      desc: "you need to go to the market to get this jobe done2"
    },
    {
      sno: 3,
      title:"GO to the ghat",
      desc: "you need to go to the market to get this jobe done3"
    }
  ]);
  return (
    <>
     <Header title="MyTodosList" searchBar={false}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
</>
  );
}

export default App;

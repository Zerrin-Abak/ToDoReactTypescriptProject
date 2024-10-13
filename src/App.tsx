import React from 'react';
import './App.css';
import { useState } from 'react';
import { todoType } from './appTypes';
import ToDoItem from './ToDoItem';

function App() {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
    else if(event.target.name === "workDay"){
      setWorkDay(Number(event.target.value));
    }
  }

  const addTask = ():void => {
    const newTask:todoType = {
      task:task,
      day:workDay
    }
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  }

  const deleteTask = (taskToDelete:string):void => {
    const newTaskList = todoList.filter((element) => {
      return element.task !== taskToDelete;
    });
    setTodoList(newTaskList);
  }

  return (
    <div className="App">
      <div className='main-card-container'>
        <input className='main-card-input' type='text' value={task} placeholder='Please enter a task.' onChange={handleChange} name = "task"/>
        <input className='main-card-input' type='number' value={workDay} placeholder='Choose number of day to complete task.' onChange={handleChange} name='workDay'/>
        <button className='main-card-btn' onClick={addTask}>Add a new task.</button>
      </div>
      <div className='main-tasks-container'>
        {
          todoList.map((element: todoType, index: number) => {
            return (<ToDoItem item = {element} key={index} deleteTask={deleteTask}/>)
          })
        }
      </div>
    </div>
  );
}

export default App;

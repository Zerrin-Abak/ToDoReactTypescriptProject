import React from 'react';
import { itemType } from './appTypes';

function ToDoItem(props:itemType) {
    
  return (
    <div>
        <div className='task-container'>
            <p>{props.item.task}</p>
            <p>{props.item.day}</p>
            <button className='task-delete-btn' onClick={() => {props.deleteTask(props.item.task)}}>Delete</button>
        </div>
    </div>
  )
}

export default ToDoItem
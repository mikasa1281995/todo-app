import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit} from 'react-icons/ti'
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";


function Todo({todos, completeTodo, removeTodo, updateTodo, markComplete, DelCom}) {
    const[edit,setEdit]=useState({
        id: null,
        value: '',
    });

    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value:''
        })
    }
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo,index)=>(
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index}
        >
            <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className="icons">
        
                <a
                    onClick={() => markComplete(todo.id)}
                    className={`${todo.isMark ? 'star-icon-after' : 'star-icon'}`}
                />
                <TiEdit
                    onClick={()=> setEdit({id: todo.id, value: todo.text})}
                    className='edit-icon'
                />  
                <RiCloseCircleLine 
                    onClick={()=> removeTodo(todo.id)}
                    className='delete-icon'
                />

            </div>

        </div>
    ))
}

export default Todo

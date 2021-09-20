import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const[todos,setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.test)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.test)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item)));
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
    }

    const DelCom = id => {
        let filtered = todos.filter(todo => {
          return !todo.isComplete;
        });
        setTodos(filtered);
    };

    const markComplete = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isMark = !todo.isMark;
            }
            return todo;
        });
        setTodos(updateTodos);
    }

    return (
        <>  
            <div>
                <h1>Hôm nay bạn định làm gì :]] ???</h1>
                <TodoForm onSubmit={addTodo} />
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    markComplete={markComplete}
                    DelCom={DelCom} />
            </div>
            <button
                style = {{'margin-left': '1200px'}}
                onClick={DelCom}
                className = 'DelCom-btt'>Clear Completed task
            </button>
        </>
    );
}

export default TodoList

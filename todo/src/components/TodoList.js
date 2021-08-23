import React, {useState ,useContext} from 'react';
import Todo from './Todo';
import {TodoContext} from '../TodoContext';

function TodoList(){
    
    const [todos, setTodos] = useContext(TodoContext);
    return(
        <div>
            {todos.map( (item, index) => {
                return(
                    <div  key={index}>
                        <Todo todo={item}/>
                    </div>
                )
             })}
        </div>
    )
}

export default TodoList;
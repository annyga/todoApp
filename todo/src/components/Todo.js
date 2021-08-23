import React, {useState, useContext} from 'react';
import {TodoContext} from '../TodoContext';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Todo(props){
    const [todos, setTodo] = useContext(TodoContext);

    const removeTodo = () =>{
        let tempId = props.todo._id;

        let listOfKeepers = todos.filter( item => item._id !== tempId )

        axios.delete('http://localhost:3001/api/todos/' + tempId)
        .then( (res) => {
            console.log(res);
            console.log(tempId);
        })
        .catch( (err) => console.log(err));
        setTodo(listOfKeepers);
    }

    return(
        <div>
            <Alert variant='primary'>{props.todo.text}<Button className='float-right' size='sm' onClick={removeTodo}>Remove</Button></Alert>
        </div>
    )
}

export default Todo;
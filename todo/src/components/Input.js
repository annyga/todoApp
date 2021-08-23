import React, { useState, useContext, useEffect } from 'react';
import {TodoContext} from '../TodoContext';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Input() {

    const [todos, setTodos] = useContext(TodoContext);
    const [task, setTask] = useState('');

    const handleTaskChange = (event) => {
        setTask(event.target.value);
    }

    const saveTask = () => {
        let tempTask = {
            text: task,
            done: false
        }

        axios.post('http://localhost:3001/api/todos', tempTask)
        .then( (res) => {
            console.log(res); 
            setTodos([...todos, tempTask]);  
            setTask('');
            getTodos();        
        })
        .catch( (err) => console.log(err));

        
        

    }

    const getTodos =() => {
        let tempList;

        axios.get('http://localhost:3001/api/todos')
        .then(res => setTodos(res.data))
        .catch( (err) => {console.log(err)});

    }

    useEffect(getTodos, []);

    return(
        <div>
            <label>Enter task:<input type='text' maxlength='45' value={task} onChange={handleTaskChange}></input></label>
            <Button size='sm' onClick={saveTask}>save</Button>
        </div>
    )
}

export default Input;
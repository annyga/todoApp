import React, {useState} from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import {TodoProvider} from './TodoContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  //const [todos, setTodos] = useState([]);

  return (
    <TodoProvider>    
      <Container>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
            <div>
              <h1>Todo App</h1>
              <Input/>
              <TodoList/>
            </div>
          </Col>
        </Row>
      </Container>
    </TodoProvider>
  );
}

export default App;

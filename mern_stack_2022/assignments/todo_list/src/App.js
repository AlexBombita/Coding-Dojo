import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';

function App() {
  // CREATE STATE TO KEEP TRACK OF USERS
  const [task, setTask] = useState([])

  // CREATE A FUNCTION THAT ADDS TO USERS LIST
  const addTask = (taskObj) => {
    setTask([...task, taskObj])
  }

  // CREATE A FUNCTINO THAT REMOVES A USER FROM LIST
  const removeTask = (indexToDelete) => {
    const newTask = task.filter((_, i) => indexToDelete !== i)
    setTask(newTask)
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <Form addTask={addTask} />
      <Display setTask={setTask} removeTask={removeTask} task={task} />
    </fieldset>
  );
}

export default App;

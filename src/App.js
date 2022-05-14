import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice'

import TodoList from './components/TodoList';
import InputField from './components/InputField';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const AddTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={AddTask} />
      <TodoList />
    </div>
  );
}

export default App;

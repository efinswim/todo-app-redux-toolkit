import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewTodo, fetchTodos } from './store/todoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const {status, error} = useSelector(state => state.todos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  };

  return (
    <div className="App">
      <InputField 
        value={text} 
        updateText={setText} 
        handleAction={handleAction} 
      />

      {status === 'loading' && <h2>Loading</h2>}
      {error && <h2>Error: {error}</h2>}
      
      <TodoList />
    </div>
  );
}

export default App;

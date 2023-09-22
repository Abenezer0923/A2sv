import React, { useState } from 'react';
import './App.css';
import Lists from './components/List';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Pages/Home'; 
import About from './Pages/About'; 

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index: number, newText: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div className="bg-blue-500 w-full min-h-screen p-4">
        <h1 className='text-red-200 text-4xl mb-4 text-center'>Todo List</h1>
        <nav className='flex justify-center text-red-600 text-2xl mb-4'>
          <Link className="mr-4" to="/home">Home</Link> | <Link to="/about"  className="ml-4">About</Link>
        </nav>
        <div className='flex items-center justify-center mb-4'>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='rounded-sm px-2 py-1 border border-gray-400 mr-2'
        />
        <button className='bg-red-200 rounded px-2 py-1 text-white' onClick={addTodo}>Add</button>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Lists todos={todos} onDelete={deleteTodo} onEdit={editTodo} />}
          />
          <Route path="/about" element={<About />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

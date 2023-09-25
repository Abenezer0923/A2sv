import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
  
const TaskInput = ({addTask}) => {
    const [newTask, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== ''){
            addTask({id: Date.now(), text: newTask, completed:false});
            setTask('');

        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a Task' value={newTask} onChange={(e) => setTask(e.target.value)} />
            <button type='submit'>Add Task</button>

        </form>
    )
}

const mapDispatchToProps = {
    addTask,
  };
  export default connect(null, mapDispatchToProps)(TaskInput);



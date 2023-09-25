import React from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../actions';


const TaskList = ({tasks, updateTask, deleteTask}) => {
    console.log(tasks);
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => updateTask(task.id, { ...task, completed: !task.completed })}>
                        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                    </button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
  });
  
  const mapDispatchToProps = {
    updateTask,
    deleteTask,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
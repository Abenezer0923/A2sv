const initState = {
    tasks: [],
  };


const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case 'ADD_TASK': 
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'UPDATE_TASK': 
        const update = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload.updateTask : task
        );
  
        return {
          ...state,
          tasks: update,
        };
      case 'DELETE_TASK':
        const dlt = state.tasks.filter((task) => task.id !== action.payload);
        return {
          ...state,
          tasks: dlt,
        };
      default:
        return state;
    }
  };

  export default rootReducer;   
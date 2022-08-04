// Action value
const ADD_TODO = "ADD_TODO";
const CLEAR_TODO = "CLEAR_TODO";
const CENCEL_TODO = "CENCEL_TODO";
const DELETE_TODO = "DELETE_TODO";


// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const clearTodo = (payload) => {
  return { type: CLEAR_TODO, payload };
};

export const cencelTodo = (payload) => {
  return { type: CENCEL_TODO, payload}
}

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload }
}


// initial State
const initialState = {
  todos: [
    {
      id: 101,
      title: "react.",
      content: "리액트를 배워봅시다",
      isDone: true,
    },
    {
      id: 102,
      title: "redux.",
      content: "redux를 배워봅시다.",
      isDone: true,
    },
    {
      id: 103,
      title: "툴킷.",
      content: "툴킷을 배워봅시다.",
      isDone: false,
    },
  ],
};

// Reducer
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case CLEAR_TODO:{
      const newClearTodo = state.todos.map((todo) => {
        if (todo.id === action.payload)
          todo.isDone = !todo.isDone;
          return todo
      })
      return {
        todos: newClearTodo
      }};
    
    case CENCEL_TODO:{
      const newCencelTodo = state.todos.map((todo) => {
        if (todo.id === action.payload)
          todo.isDone = !todo.isDone;
          return todo
      })
      return{
        todos: newCencelTodo
      }};

    case DELETE_TODO:{
      const newDelTodo = state.todos.filter((todo) => 
      {return todo.id !== action.payload} 
      )
    return {
      todos: newDelTodo
    }
    };

    default:
      return state;
  }
};


export default todos;


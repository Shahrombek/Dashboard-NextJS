import * as t from "../types";

const initialState = {
  addTodo: {},
  singleTodo:{
    title: 'task 1',
    info: 'decription',
  },
};

const newsReducer = (state = initialState, action) => {
  console.log("keldi", action);
  switch (action.type) {
    case t.ADD_TODO:
      return {
        ...state,
        addTodo: {
          ...state.addTodo,
          [action.payload.id]: { ...action.payload },
        },
      };

    case t.REMOVE_TODO:
      const task = Object.values(state.addTodo).filter(
        (e) => e.id !== action.payload.id
      );
      return { ...state, addTodo: { ...task } };

    case t.EDIT_TODO:
      // const edit = Object.values(state.addTodo).filter(
      //   (e) => e.id === action.payload.id
      // );
      return {...state, singleTodo:{...action.payload}};
    
      default:
      return state;
  }
};

export default newsReducer;

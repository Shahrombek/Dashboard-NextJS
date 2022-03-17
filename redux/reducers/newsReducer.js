import * as t from "../types";

const initialState = {
  addTodo: {},
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
      default:
      return state;
  }
};

export default newsReducer;
